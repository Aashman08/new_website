"""Render the site's music: an original piece for organ in a large hall, written here as data and synthesised from nothing but this script.

What it is: a quick, soft, unbroken pulse of flute pipes rolling through slow chords; a held bed of string pipes under it; a pedal bass that
arrives late; a plain slow melody over the top. It starts dark and close, opens out stop by stop to full organ about two thirds of the way
through, then falls back to the opening's quiet, so the end can be crossfaded into the beginning (sound.js does that).

The notes, the chords and the rolling figure below are this piece's own. Its production (how fast the pulse is, how the loudness and brightness
grow, how wide and how reverberant it is) was set by measuring a reference recording in that idiom; nothing of that recording's melody, figure
or chord sequence was taken, and no audio from it is used.

Usage (numpy, scipy; afconvert for the .m4a, which macOS has):
    python3 score.py out.wav            # about a minute; prints the loudness of each section
    afconvert -f m4af -d aac -s 2 -b 160000 -q 127 out.wav ../audio/inbound-theme.m4a
"""
import sys, wave
import numpy as np
from scipy import signal

SR = 44100
BAR = 2.0                       # seconds; twelve pulses to the bar
STEP = BAR / 12
END_BAR = 58                    # the last bar that sounds; the hall rings on after it
TAIL = 5.0
rng = np.random.default_rng(11)
N = int((END_BAR * BAR + TAIL) * SR)

def hz(m): return 440.0 * 2 ** ((m - 69) / 12)
def db(x): return 10 ** (x / 20)

# ── the pipes: each stop is a recipe of harmonics (the first is the note itself) ──
def _norm(h): h = np.asarray(h, float); return h / np.sqrt((h ** 2).sum())
STOPS = {
    'flute':     _norm([1, .03, .22, .012, .07, .006, .025, 0, .01]),                               # stopped wood: hollow, odd harmonics
    'principal': _norm([1 / n ** 1.35 for n in range(1, 15)]),                                      # the organ's plain open voice
    'string':    _norm([(0.6 if n == 1 else 1) / n ** 0.9 * np.exp(-n / 14) for n in range(1, 21)]),  # narrow pipes: thin and bright
    'sub':       _norm([1, .25, .18, .06, .05, .02]),                                               # the big stopped pedal pipes
}
_tune = {}
def pipe(stop, f, dur, att, rel, chiff=0.0, air=0.05):
    """One pipe speaking for dur seconds (mono). att, rel: how fast it speaks and stops. chiff: the puff as it starts. air: wind noise while it sounds."""
    n = int((dur + rel * 7) * SR); t = np.arange(n) / SR
    key = (stop, round(f, 2)); det = _tune.setdefault(key, 1 + rng.standard_normal() * 0.0011)       # every pipe is a hair out of tune, always the same hair
    wob = 0.0008 * np.sin(2 * np.pi * (4.0 + 1.6 * rng.random()) * t + 6.28 * rng.random()) + 0.0005 * np.sin(2 * np.pi * (6.2 + 2 * rng.random()) * t + 6.28 * rng.random())   # the wind is never quite steady
    ph = 2 * np.pi * f * det * np.cumsum(1 + wob) / SR
    h = STOPS[stop]; k = np.arange(1, len(h) + 1); keep = (k * f * 1.01 < 15000) & (h > 0); k = k[keep]; a = h[keep]
    on = 1 - np.exp(-t[None, :] / (att / (1 + 0.18 * (k[:, None] - 1))))                             # the upper harmonics speak first, the note fills in under them
    y = (a[:, None] * on * np.sin(k[:, None] * ph[None, :] + 6.28 * rng.random(len(k))[:, None])).sum(0)
    fc = min(2.6 * f, 7000); b, a2 = signal.butter(1, [fc * 0.55 / (SR / 2), min(0.95, fc * 1.8 / (SR / 2))], 'band')
    if air > 0: y += air * signal.lfilter(b, a2, rng.standard_normal(n)) * (1 - np.exp(-t / (att * 2)))    # wind in the pipe: a soft hiss round the note, never quite the same twice
    if chiff > 0:                                                                                   # the puff of air as the pipe starts
        m = min(n, int(0.09 * SR)); tt = t[:m]
        y[:m] += chiff * 0.6 * signal.lfilter(b, a2, rng.standard_normal(m)) * np.exp(-tt / 0.022) * (1 - np.exp(-tt / 0.003))
    y *= np.where(t < dur, 1.0, np.exp(-np.maximum(0, t - dur) / rel))
    return y

def ensemble(f, dur, att, rel, bright=0.9, nh=18):
    """A section of strings holding one note (mono): every harmonic is a narrow band of noise round its pitch, the way many players a hair apart
    add up, with a steady core so it does not flutter."""
    n = int((dur + rel * 6) * SR); t = np.arange(n) / SR; y = np.zeros(n); tot = 0
    for k in range(1, nh + 1):
        fk = f * k
        if fk > 9000: break
        a = (0.7 if k == 1 else 1) / k ** bright * np.exp(-k / 12); bw = max(0.9, 0.0045 * fk)        # the band widens with pitch (the same small detuning, in Hz)
        m = max(4, int(n / SR * bw * 4) + 4); z = (rng.standard_normal(m) + 1j * rng.standard_normal(m)) / np.sqrt(2); xi = np.linspace(0, m - 1, n)
        c = 0.5 + 0.5 * (np.interp(xi, np.arange(m), z.real) + 1j * np.interp(xi, np.arange(m), z.imag))
        y += a * (c * np.exp(1j * (2 * np.pi * fk * t + 6.28 * rng.random()))).real; tot += a * a
    y /= np.sqrt(tot); y *= (1 - np.exp(-t / att)) * np.where(t < dur, 1.0, np.exp(-np.maximum(0, t - dur) / rel))
    return y

class Auto:
    """A level that changes over the piece: (bar, dB) points, joined in straight lines; None is silence."""
    def __init__(self, *pts): self.b = np.array([p[0] for p in pts], float); self.v = np.array([-120.0 if p[1] is None else p[1] for p in pts])
    def __call__(self, bars): return np.interp(bars, self.b, self.v)

BUS = {g: np.zeros((2, N), np.float32) for g in ('ost', 'pad', 'bass', 'mel')}
def put(group, y, t0, gain, pan):
    i = int(round(t0 * SR));
    if i >= N or i < 0: return
    y = y[:N - i]; a = (pan + 1) * np.pi / 4
    BUS[group][0, i:i + len(y)] += (y * gain * np.cos(a)).astype(np.float32); BUS[group][1, i:i + len(y)] += (y * gain * np.sin(a)).astype(np.float32)
def note(group, stop, midi, bar, bars, auto, att, rel, chiff=0.0, pan=None, vel=0.0, foot=8, dt=0.0):
    """A note on one stop. foot: the stop's pitch (8 as written, 4 an octave up, 16 an octave down ...). auto: its level over the piece."""
    f = hz(midi) * 8 / foot; dur = bars * BAR; g0 = auto(bar)
    if max(g0, auto(bar + bars)) < -70: return
    y = ensemble(f, dur, att, rel) if stop == 'ensemble' else pipe(stop, f, dur, att, rel, chiff)
    if bars > 0.25: y *= db(auto(bar + np.arange(len(y)) / SR / BAR))
    else: y *= db(g0)
    if pan is None: pan = 0.75 * np.sin(midi * 2.399 + foot)                                         # pipes stand left and right by pitch, as they do in an organ case
    put(group, y, bar * BAR + dt, db(vel), pan)

# ── the piece ──
V = {   # each chord as the five notes the hands hold (low to high), and the pedal note under them
    'Bb9':  ([58, 62, 65, 70, 72], 46), 'F/A':  ([57, 60, 65, 69, 72], 45), 'Gm7': ([58, 62, 65, 67, 74], 43), 'Csus': ([60, 65, 67, 72, 74], 48),
    'C':    ([60, 64, 67, 72, 76], 48), 'Dm':   ([57, 62, 65, 69, 74], 50), 'BbM7': ([58, 62, 65, 69, 74], 46), 'F/C': ([60, 65, 69, 72, 77], 48),
    'C/E':  ([55, 60, 64, 67, 72], 52), 'C/Bb': ([58, 60, 64, 67, 72], 46), 'Am7': ([57, 60, 64, 67, 72], 45), 'F9':   ([57, 60, 65, 67, 72], 41),
}
CHORDS = [(0, 2, 'Bb9'), (2, 2, 'F/A'), (4, 2, 'Gm7'), (6, 1, 'Csus'), (7, 1, 'C'),                 # opening: the pulse alone
          (8, 2, 'Bb9'), (10, 2, 'F/A'), (12, 2, 'Gm7'), (14, 1, 'Csus'), (15, 1, 'C'),              # A: the melody enters
          (16, 2, 'Dm'), (18, 2, 'BbM7'), (20, 2, 'F/C'), (22, 2, 'C/E'),                            # B: it lifts
          (24, 2, 'Bb9'), (26, 2, 'F/A'), (28, 2, 'Gm7'), (30, 1, 'Csus'), (31, 1, 'C'),             # A again, fuller
          (32, 2, 'Bb9'), (34, 2, 'C/Bb'), (36, 2, 'Am7'), (38, 2, 'Dm'), (40, 2, 'Gm7'), (42, 1, 'Csus'), (43, 1, 'C'),   # full organ
          (44, 2, 'Bb9'), (46, 2, 'F/A'), (48, 2, 'Gm7'), (50, 2, 'F9'), (52, 6, 'F9')]              # falling back, and the last chord held
MELODY = [(8, 1.5, 74), (9.5, 1.5, 72), (11, 1, 69), (12, 1.5, 70), (13.5, .5, 74), (14, 1, 77), (15, 1, 76),
          (16, 1, 74), (17, 1, 77), (18, 1.5, 81), (19.5, .5, 79), (20, 1, 77), (21, 1, 72), (22, 1, 76), (23, 1, 79),
          (24, 1.5, 74), (25.5, 1.5, 72), (27, 1, 69), (28, 1.5, 70), (29.5, .5, 74), (30, 1, 77), (31, .5, 76), (31.5, .5, 72),
          (32, 1.5, 74), (33.5, .5, 77), (34, 1.5, 79), (35.5, 1.5, 76), (37, 1, 72), (38, 1, 74), (39, 1, 81), (40, 1.5, 82), (41.5, .5, 81), (42, 1, 79), (43, 1, 76),
          (44, 2, 74), (46, 2, 72), (48, 1, 70), (49, 1, 69), (50, 2, 67), (52, 4.5, 69)]
ROLL_CALM = [0, 2, 1, 3, 2, 3, 1, 3, 2, 3, 1, 2]                                                    # which of the five held notes each pulse plays
ROLL = [0, 2, 1, 3, 2, 4, 3, 2, 1, 3, 2, 1]

# how loud each stop is through the piece (dB; None: not drawn). Bars: 0 opening · 8 A · 16 B · 24 A again · 32 full · 44 falling back · 52 last chord
A = {
    'ost.fl8': Auto((0, -6), (8, -5), (32, -4), (43, -4), (45, -6), (52, -9), (55, -16), (56.5, None)),
    'ost.fl4': Auto((0, None), (7, None), (10, -17), (16, -14), (24, -12), (32, -10), (43, -9), (45, -15), (49, -24), (51, None)),
    'ost.pr8': Auto((0, None), (15, None), (18, -17), (24, -12), (32, -8), (43, -7), (45, -15), (47, None)),
    'ost.pr4': Auto((0, None), (23, None), (27, -23), (32, -17), (43, -17), (45.5, None)),
    'ost.pr2': Auto((0, None), (31, None), (34, -27), (38, -23), (43, -24), (44.5, None)),
    'pad.str': Auto((0, -20), (8, -16), (16, -12), (24, -10), (32, -7), (43, -6), (45.5, -12), (52, -13), (55, -15), (58, -34)),
    'pad.fl8': Auto((0, -16), (16, -14), (32, -12), (43, -12), (45, -14), (55, -15), (58, -34)),
    'pad.st4': Auto((0, None), (21, None), (24, -25), (32, -19), (43, -19), (46, None)),
    'bas.pr8': Auto((0, None), (7.5, None), (9, -15), (16, -11), (24, -9), (32, -6), (43, -5.5), (45.5, -11), (52, -13), (58, -34)),
    'bas.s16': Auto((0, None), (15, None), (17, -13), (24, -9), (32, -5), (43, -5), (45.5, -10), (52, -11), (58, -32)),
    'bas.p16': Auto((0, None), (31, None), (33, -13), (43, -12), (45, None)),
    'bas.s32': Auto((0, None), (30, None), (33, -15), (43, -14), (46, None)),
    'mel.pr8': Auto((0, None), (7.9, None), (8, -9), (16, -7.5), (24, -6.5), (32, -4.5), (43.9, -4), (44, -11), (52, -14), (57, -30)),
    'mel.fl4': Auto((0, None), (7.9, None), (8, -18), (16, -15), (24, -13), (32, -12), (43.9, -12), (44, -17), (52, -22), (57, -34)),
    'mel.pr4': Auto((0, None), (23, None), (24, -21), (32, -15), (43, -15), (45, None)),
    'mel.mix': Auto((0, None), (31, None), (33, -25), (43, -24), (44.5, None)),
}

def build():
    for bar0, nb, name in CHORDS:
        v, bass = V[name]
        # the rolling pulse
        for b in range(int(nb)):
            bar = bar0 + b
            if bar >= 57: break
            roll = ROLL_CALM if bar < 8 or bar >= 50 else ROLL
            for i in range(12):
                if bar >= 54 and i % 3: continue                                                    # at the very end the pulse thins to one note in three, then stops
                m = v[roll[i]]; at = bar + i / 12; vel = (1.4 if i % 6 == 0 else 0.5 if i % 3 == 0 else 0) + rng.standard_normal() * 0.5; dt = rng.standard_normal() * 0.003
                kw = dict(att=0.009, rel=0.05, vel=vel, dt=dt); g = 0.6 / 12                         # (each note sounds for a little over half its slot)
                note('ost', 'flute', m, at, g, A['ost.fl8'], chiff=0.7, **kw)
                note('ost', 'flute', m, at, g, A['ost.fl4'], chiff=0.4, foot=4, **kw)
                note('ost', 'principal', m, at, g, A['ost.pr8'], chiff=0.25, **kw)
                note('ost', 'principal', m, at, g, A['ost.pr4'], foot=4, **kw)
                note('ost', 'principal', m, at, g, A['ost.pr2'], foot=2, **kw)
        # the held chord under it: strings, and soft flute pipes
        for j, m in enumerate(v):
            note('pad', 'ensemble', m, bar0, nb, A['pad.str'], att=0.7, rel=0.8)
            note('pad', 'ensemble', m, bar0, nb, A['pad.str'], att=0.9, rel=0.8, pan=-0.75 * np.sin(m * 2.399 + 8), vel=-2)   # (a second desk, on the other side)
            if j < 3: note('pad', 'flute', m, bar0, nb, A['pad.fl8'], att=0.5, rel=0.7)
            if j >= 2: note('pad', 'ensemble', m, bar0, nb, A['pad.st4'], att=1.2, rel=0.9, foot=4)
        # the pedal
        note('bass', 'principal', bass, bar0, nb, A['bas.pr8'], att=0.11, rel=0.45, pan=0.0)
        note('bass', 'sub', bass, bar0, nb, A['bas.s16'], att=0.16, rel=0.5, pan=0.0, foot=16)
        note('bass', 'principal', bass, bar0, nb, A['bas.p16'], att=0.14, rel=0.5, pan=0.0, foot=16)
        note('bass', 'sub', bass, bar0, nb, A['bas.s32'], att=0.22, rel=0.6, pan=0.0, foot=32)
    for bar, nb, m in MELODY:
        kw = dict(att=0.085, rel=0.38)
        note('mel', 'principal', m, bar, nb * 0.97, A['mel.pr8'], chiff=0.12, pan=0.12, **kw)
        note('mel', 'flute', m, bar, nb * 0.97, A['mel.fl4'], pan=-0.2, foot=4, **kw)
        note('mel', 'principal', m, bar, nb * 0.97, A['mel.pr4'], pan=-0.1, foot=4, **kw)
        for foot, pan in ((8 / 3, 0.3), (2, -0.3)): note('mel', 'principal', m, bar, nb * 0.97, A['mel.mix'], pan=pan, foot=foot, **kw)   # the mixture: a quint and an octave high above

def hall(seconds=7.0):
    """The room: a long, wide, decorrelated tail whose top dies away sooner than its bottom (as stone halls do)."""
    n = int(seconds * SR); t = np.arange(n) / SR; out = np.zeros((2, n))
    bands = [(60, 180, 6.6), (180, 360, 6.2), (360, 720, 5.6), (720, 1440, 4.8), (1440, 2880, 3.6), (2880, 5760, 2.4), (5760, 12000, 1.4)]   # low edge, high edge (Hz), seconds to fall by 60 dB
    for c in range(2):
        nz = rng.standard_normal(n)
        for lo, hi, rt in bands:
            sos = signal.butter(2, [lo / (SR / 2), hi / (SR / 2)], 'band', output='sos'); out[c] += signal.sosfilt(sos, nz) * np.exp(-6.91 * t / rt)
        out[c] *= 1 - np.exp(-t / 0.035)                                                             # the sound takes a moment to fill the room
        out[c] = np.concatenate([np.zeros(int(0.028 * SR)), out[c]])[:n]                             # and the first of it arrives a little after the pipes do
    return out / np.sqrt((out ** 2).sum(1).mean())

def master():
    ir = hall(); send = {'ost': (0.66, 0.5), 'pad': (0.25, 1.0), 'bass': (0.7, 0.4), 'mel': (0.5, 0.7)}                                 # each part: how much is heard directly, how much through the hall
    mix = np.zeros((2, N))
    for g, (dry, wet) in send.items():
        x = BUS[g].astype(np.float64)
        w = np.stack([signal.oaconvolve(x[c], ir[c])[:N] for c in range(2)])
        if g == 'bass': w = signal.sosfilt(signal.butter(2, 70 / (SR / 2), 'high', output='sos'), w)                                          # (the hall's low rumble is kept out of the pedal)
        mix += dry * x + wet * w
    # dark and close at the start, open at the full organ, dark again at the end: the top of the sound is let in gradually
    bars = np.arange(N) / SR / BAR
    open_ = np.interp(bars, [0, 8, 16, 24, 32, 43, 47, 52, 58, 61], [0.06, 0.2, 0.46, 0.66, 1.0, 1.0, 0.45, 0.2, 0.08, 0.06])
    dark = signal.sosfilt(signal.butter(4, 1000 / (SR / 2), 'low', output='sos'), mix)
    mix = dark * (1 - open_) + mix * open_
    mix = 0.55 * signal.sosfilt(signal.butter(1, 2200 / (SR / 2), 'low', output='sos'), mix) + 0.45 * mix    # the very top is always held back: heard down a nave, not from the organ loft
    mid, side = (mix[0] + mix[1]) / 2, (mix[0] - mix[1]) / 2 * 0.72; mix = np.stack([mid + side, mid - side])   # wide, but not hollow in the middle
    mix = signal.sosfilt(signal.butter(2, 26 / (SR / 2), 'high', output='sos'), mix)
    # the quiet parts are brought part of the way up towards the loud ones (it plays under a web page, often on small speakers, and the opening
    # must still be heard): a slow ride of the level, never fast enough to be heard working, and held still through the final fade
    hop = SR // 4; lv = 10 * np.log10(np.array([(mix[:, i:i + hop] ** 2).mean() for i in range(0, N, hop)]) + 1e-12)
    lv = np.convolve(np.pad(lv, 16, mode='edge'), np.hanning(33) / np.hanning(33).sum(), 'valid'); gain = np.minimum(7.0, 0.42 * (lv.max() - lv))
    k55 = int(55 * BAR * SR / hop); gain[k55:] = gain[k55]
    mix *= db(np.interp(np.arange(N) / hop, np.arange(len(gain)), gain))
    # level: the loudest stretch is set to about -14.5 dB RMS, peaks are rounded off just under full scale
    sec = int(SR * 2); rms = np.sqrt(np.array([(mix[:, i:i + sec] ** 2).mean() for i in range(0, N - sec, sec)])); mix *= db(-14.5) / rms.max()
    lim = db(-1.2); knee = 0.6 * lim; a = np.abs(mix); over = a > knee
    mix[over] = np.sign(mix[over]) * (knee + (lim - knee) * np.tanh((a[over] - knee) / (lim - knee)))
    fade = int(2.5 * SR); mix[:, -fade:] *= np.cos(np.linspace(0, np.pi / 2, fade)) ** 2; mix[:, :int(0.02 * SR)] *= np.linspace(0, 1, int(0.02 * SR))
    return mix

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else 'inbound-theme.wav'
    build(); mix = master()
    names = [(0, 'opening'), (8, 'A'), (16, 'B'), (24, 'A again'), (32, 'full'), (44, 'falling back'), (52, 'last chord')]
    for (b0, nm), (b1, _) in zip(names, names[1:] + [(END_BAR, '')]):
        seg = mix[:, int(b0 * BAR * SR):int(b1 * BAR * SR)]; print('%-13s bars %2d-%2d  %6.1f dB RMS' % (nm, b0, b1, 20 * np.log10(np.sqrt((seg ** 2).mean()))))
    print('peak %.2f dBFS, %.1f s' % (20 * np.log10(np.abs(mix).max()), N / SR))
    w = wave.open(out, 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    d = rng.random(mix.T.shape) - rng.random(mix.T.shape)                                            # (dither)
    w.writeframes(np.clip(np.round(mix.T * 32767 + d), -32768, 32767).astype('<i2').tobytes()); w.close()
