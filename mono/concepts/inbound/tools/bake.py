"""Bake the opening disk's gas as a volume description (read through the simulated flow maps).

gas.jpg    (RGB 4:4:4, 4096x1024)  R how high the gas stands, as a multiple of the disk's local thickness (/2.2)
                                   G how high the shadow cast from the core reaches (/3.4) · B dust-cloud column
temp.webp  (grey, 1024x256)        temperature variation (hue), independent of the relief

x = angle round the disk, y = log-radius (row 0 = inner edge r 0.13, last row = r 1.12)

Usage (numpy, scipy, Pillow):
    python3 flow.py 7 flow.npz 12 1.0 0.11 0.10      # the flow simulation, about half a minute
    python3 bake.py flow.npz ..                      # writes gas.jpg and temp.webp next to index.html
Settings can be overridden as name=value after the output folder (see P below); debug=1 also writes pictures of the maps.
The shader in index.html (openGas) rebuilds the same gas from these maps: heights, taper and dust shape must stay in step with it.
"""
import sys, numpy as np
from scipy.ndimage import map_coordinates, zoom, gaussian_filter1d
from PIL import Image

flow = sys.argv[1]; outdir = sys.argv[2]; seed = int(sys.argv[3]) if len(sys.argv) > 3 else 11
P = dict(Ab=0.30, As=0.07, Al=0.16, yL=0.09, lam=0.22, gap=4, ZD=1.15, c0=0.45, c1=2.0, blur=3.0)
for a in sys.argv[4:]:
    k, v = a.split('='); P[k] = float(v)
rng = np.random.default_rng(seed)
F = np.load(flow); S_OUT, KAPPA = float(F['S_OUT']), float(F['KAPPA'])
OW, OH = 4096, 1024
LR0 = np.log(0.16); DL = np.log(1.15 / 0.16)


def field(m_c, m_s, ky_c, ky_s):
    m = np.abs(np.fft.fftfreq(OW) * OW)[None, :]; ky = np.abs(np.fft.fftfreq(OH) * OH)[:, None]
    am = np.exp(-0.5 * (np.log(np.maximum(m, 0.5) / m_c) / m_s) ** 2); am = np.where(m < 0.5, 0.0, am)
    ay = np.exp(-0.5 * (np.log(np.maximum(ky, 0.5) / ky_c) / ky_s) ** 2)
    f = np.fft.ifft2((rng.normal(size=(OH, OW)) + 1j * rng.normal(size=(OH, OW))) * (am * ay)).real
    return (f - f.mean()) / (f.std() + 1e-9)


def iso(lo, hi, slope):
    fx = np.fft.fftfreq(OW) * OW / 4.0; fy = np.fft.fftfreq(OH) * OH
    KX, KY = np.meshgrid(fx, fy); k = np.sqrt(KX ** 2 + KY ** 2); k[0, 0] = 1.0
    amp = k ** (-slope / 2.0) * np.exp(-(k / hi) ** 4) * (1 - np.exp(-(k / lo) ** 4)); amp[0, 0] = 0.0
    f = np.fft.ifft2((rng.normal(size=(OH, OW)) + 1j * rng.normal(size=(OH, OW))) * amp).real
    return (f - f.mean()) / (f.std() + 1e-9)


def up(D, mode): return zoom(D.astype(np.float64), 2, order=1, mode=mode) * 2
def sst(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def norm(f): return (f - f.mean()) / (f.std() + 1e-9)

YO, XO = np.meshgrid(np.arange(OH, dtype=np.float64), np.arange(OW, dtype=np.float64), indexing='ij')
ys, xs = YO + up(F['Dy'], 'nearest'), XO + up(F['Dx'], 'grid-wrap')
yl, xl = YO + up(F['Ly'], 'nearest'), XO + up(F['Lx'], 'grid-wrap')
S = lambda G, yy=ys, xx=xs: map_coordinates(G, [np.clip(yy, 0, OH - 1), xx], order=1, mode='grid-wrap')

yn = (np.arange(OH) / (OH - 1.0))[:, None]
r = np.exp(LR0 + yn * DL) - 0.03
hg = 0.008 + 0.027 * r * r
slope = S_OUT * np.exp(KAPPA * (1 - yn))
def keep(m): lam = OH / (m * slope * DL / (2 * np.pi)); return np.clip((lam - 5.0) / 6.0, 0, 1)

# ── the wound-up flow: long ridges and troughs, and an independent temperature field ──
bands = 0.0; temp = 0.0
for m_c, a in [(1.3, 1.0), (2.3, 0.95), (3.6, 0.8), (5.5, 0.6), (8.0, 0.42)]:
    bands = bands + a * keep(m_c) * S(field(m_c, 0.22, 3.0, 0.7))
    temp = temp + a * keep(m_c) * S(field(m_c, 0.22, 3.0, 0.7))
streak = 0.0
for m_c, a in [(12.0, 1.0), (19.0, 0.8), (30.0, 0.62), (46.0, 0.5), (70.0, 0.4)]:
    streak = streak + a * keep(m_c) * S(field(m_c, 0.25, 6.0, 0.8))
bands, temp, streak = norm(bands), norm(temp), norm(streak)
# ── young gas, barely stretched: rounded billows with creases between them, at two sizes ──
lump = norm(np.abs(S(iso(2.0, 12.0, 3.0), yl, xl)) + 0.45 * np.abs(S(iso(10.0, 50.0, 2.6), yl, xl)))
# ── dust: a few large clouds over the outer disk ──
dg = norm(S(iso(1.5, 9.0, 3.4), yl, xl)) + 0.22 * norm(S(iso(8.0, 30.0, 3.0), yl, xl))   # medium-sized soft clouds
C = sst(P['c0'], P['c1'], dg) * sst(0.34, 0.60, r)

tau = 1.0 + P['Ab'] * bands + P['As'] * streak + P['Al'] * lump
tau = 1.0 + 0.9 * np.tanh((tau - 1.0) / 0.9)                      # soft limits
tau = np.clip(tau, 0.3, 2.15)
wI = sst(0.15, 0.30, r)
tauE = (1.0 + (tau - 1.0) * wI) * (1.0 - 0.75 * sst(0.78, 1.08, r))   # the relief dies away into the smooth white centre, and the gas thins to a wedge at the rim (the shader does the same)

# ── light from the core: for every point, how high the shadow of everything further in reaches ──
Hg = hg * 0.9 * tauE
Hd = hg * (0.80 * tauE + 0.75 * P['ZD'] * C * (0.55 + 0.45 * tau))      # where the dust is thick enough to stop light (the shader builds the same cloud)
H = Hg + sst(0.12, 0.30, C) * np.maximum(Hd - Hg, 0.0)
m = (H - P['yL']) / r
g = int(P['gap']); M = np.full(OW, -1e9); Vs = np.zeros((OH, OW))
lam = P['lam'] * (0.4 + 1.2 * sst(0.45, 1.0, r[:, 0]))
for j in range(OH):
    if j >= g:
        dr = r[j, 0] - r[j - 1, 0]
        M = np.maximum(m[j - g], M - lam[j] * dr)                 # an occluder's shadow sinks a little as it travels: the light is not a point
        Vs[j] = (P['yL'] + M * r[j, 0]) / hg[j, 0]
    else:
        Vs[j] = 0.0
Vs = gaussian_filter1d(Vs, P.get('blur', 3.0), axis=1, mode='wrap')        # the light is not a point: shadow edges are soft across the beam too
Vs = np.clip(Vs, 0, 3.4)

tmp = 0.5 + 0.17 * (0.85 * temp + 0.35 * bands)
relief = np.clip(tau / 2.2, 0, 1)
gas = np.stack([relief, Vs / 3.4, np.clip(C, 0, 1)], -1)
Image.fromarray((gas * 255 + 0.5).astype(np.uint8), 'RGB').save(outdir + '/gas.jpg', quality=int(P.get('q', 86)), subsampling=0, optimize=True)
def quarter(a): return a.reshape(OH // 4, 4, OW // 4, 4).mean(axis=(1, 3))
Image.fromarray((quarter(np.clip(tmp, 0, 1)) * 255 + 0.5).astype(np.uint8), 'L').save(outdir + '/temp.webp', quality=90, method=6)

# how lit the visible top is (a quick check of the shadows)
top = np.maximum(0.95 * tauE, H / hg + 0.05)
lit = sst(-0.25, 0.25, top - Vs)
print('relief', tau.min().round(2), '..', tau.max().round(2), '· lit', lit.mean().round(3), '· lit, outer disk', lit[700:].mean().round(3), '· dust cover', (C > 0.22).mean().round(3))
if P.get('debug'):
    Image.fromarray((gas * 255 + 0.5).astype(np.uint8), 'RGB').save(outdir + '/debug-maps.png')
    Image.fromarray((np.clip(lit, 0, 1)[:, :2048] * 255).astype(np.uint8)).resize((1400, 700)).save(outdir + '/debug-lit.png')
