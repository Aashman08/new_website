"""Flow simulation for the accretion-disk surface -> flow maps.

Domain: x = azimuth (periodic), y = log-radius (0 = inner edge). Gas is wound up by differential rotation and stirred by
eddies that are born round, ride with the gas, get stretched by the shear and die. The backward flow map is advected
(not an image), so the starting fields can be read through it afterwards at any sharpness.

Saves: Dx, Dy  (whole history)   and  Lx, Ly  (only the last LATE fraction: young cloud that has barely been stretched)

Usage:  python3 flow.py <seed> <out.npz> <winding at the rim> <how much tighter inside> <stirring> <late fraction>
        python3 flow.py 7 flow.npz 12 1.0 0.11 0.10     (the values the page's maps were made with; then run bake.py)
"""
import sys, numpy as np
from scipy.ndimage import map_coordinates

seed = int(sys.argv[1]) if len(sys.argv) > 1 else 7
out = sys.argv[2] if len(sys.argv) > 2 else 'flow.npz'
S_OUT = float(sys.argv[3]) if len(sys.argv) > 3 else 12.0     # winding at the outer edge, radians per unit log-radius
KAPPA = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0      # how much tighter the winding is at the inner edge (e^KAPPA times)
TURB = float(sys.argv[5]) if len(sys.argv) > 5 else 0.22      # radial eddy speed, px per step (rms) at full strength
LATE = float(sys.argv[6]) if len(sys.argv) > 6 else 0.10
STEPS = 240
W, H = 2048, 512
DL = np.log(1.15 / 0.16)                                      # log-radius range covered by the texture
rng = np.random.default_rng(seed)


def grf(slope, lo, hi):
    fx = np.fft.fftfreq(W) * W / 4.0; fy = np.fft.fftfreq(H) * H          # cycles per 512 px
    KX, KY = np.meshgrid(fx, fy); k = np.sqrt(KX ** 2 + KY ** 2); k[0, 0] = 1.0
    amp = k ** (-slope / 2.0) * np.exp(-(k / hi) ** 4) * (1 - np.exp(-(k / lo) ** 4)); amp[0, 0] = 0.0
    f = np.fft.ifft2((rng.normal(size=(H, W)) + 1j * rng.normal(size=(H, W))) * amp).real
    return ((f - f.mean()) / (f.std() + 1e-9)).astype(np.float32)


def sample(F, yy, xx):
    return map_coordinates(F, [np.clip(yy, 0, H - 1), xx], order=1, mode='grid-wrap')


yn = (np.arange(H) / (H - 1.0))[:, None]
theta = S_OUT * DL / KAPPA * (np.exp(KAPPA * (1 - yn)) - 1.0)            # total winding angle, largest at the inner edge
sh = (theta * W / (2 * np.pi) / STEPS).astype(np.float64)                # px per step
taper = np.clip(np.minimum(yn, 1 - yn) / 0.05, 0, 1)
radial = 0.35 + 0.9 * yn                                                  # calmer inside, rougher toward the rim
patch = grf(3.0, 0.6, 3.0); patch = 0.30 + 1.5 / (1.0 + np.exp(-2.2 * (patch - 0.3)))   # stirring comes in patches: calm stretches, rough stretches

Y0, X0 = np.meshgrid(np.arange(H, dtype=np.float64), np.arange(W, dtype=np.float64), indexing='ij')
Dx = np.zeros((H, W)); Dy = np.zeros((H, W)); Lx = np.zeros((H, W)); Ly = np.zeros((H, W))
LIFE, GAP = 30, 15
births = list(range(-LIFE, STEPS, GAP)); eddies = {}
t_on = int(STEPS * 0.55); i_late = int(STEPS * (1 - LATE))
for i in range(STEPS):
    ramp = np.clip((i - t_on) / (STEPS * 0.25), 0, 1) ** 1.5              # stirring comes in during the second half
    ux = np.zeros((H, W)); uy = np.zeros((H, W))
    if ramp > 0:
        psi = np.zeros((H, W))
        for b in births:
            age = i - b
            if 0 <= age < LIFE:
                if b not in eddies: eddies[b] = grf(3.9, 1.2, 30.0)
                wgt = np.sin(np.pi * (age + 0.5) / LIFE) ** 2
                psi += wgt * sample(eddies[b], Y0, X0 - sh * age)        # the eddy has ridden with the gas since it was born
            elif age >= LIFE and b in eddies: del eddies[b]
        ux = np.gradient(psi, axis=0); uy = -np.gradient(psi, axis=1)
        s = TURB * ramp / (np.sqrt((uy ** 2).mean()) + 1e-9)
        amp = radial * sample(patch, Y0, X0 - sh * (i - t_on))
        ux = np.clip(ux * s, -6, 6) * amp; uy = uy * s * taper * amp
    uxt = ux + sh
    yb, xb = Y0 - uy, X0 - uxt
    Dx = sample(Dx, yb, xb) - uxt; Dy = sample(Dy, yb, xb) - uy
    if i >= i_late:
        Lx = sample(Lx, yb, xb) - uxt; Ly = sample(Ly, yb, xb) - uy
    if i % 40 == 0: print('step', i, 'ramp', round(float(ramp), 2), flush=True)

np.savez_compressed(out, Dx=Dx.astype(np.float32), Dy=Dy.astype(np.float32), Lx=Lx.astype(np.float32), Ly=Ly.astype(np.float32),
                    S_OUT=S_OUT, KAPPA=KAPPA)
print('saved', out, 'Dy rms', Dy.std().round(2), 'Ly rms', Ly.std().round(2))
