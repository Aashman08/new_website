/* Inbound: the music. One script, loaded by every page of the site, so the Sound button means the same thing everywhere.

   The page has a button with id "sound" (and, inside it, a label with id "sound-t"). Pressing it turns the music on or off. The choice, and how far
   into the music the visitor is, are kept for the browser tab (sessionStorage), so going from one page of the site to another carries on from the same
   place instead of starting again; closing the tab forgets it. Nothing is downloaded until the visitor shows interest in the button.

   The music is the site's own piece (audio/inbound-theme.m4a, two minutes; it is written and rendered by tools/score.py, not a recording of anything).
   It opens quietly and ends on a long held chord dying away, so it is not looped end to start: each pass begins under the last OVERLAP seconds of the
   one before it, the new pulse rising out of the old chord, and there is no silence and no cut at the seam.

   Browsers only let a page make sound after the visitor has clicked, tapped or pressed a key on it. Arriving from another page of the site with the
   music on, most browsers carry that permission over and the music resumes by itself; where they do not, it resumes at the visitor's first click, tap
   or key. It stops while the tab is hidden. */
(() => {
  const SRC = new URL('audio/inbound-theme.m4a', document.currentScript.src).href;
  const KEY = 'inbound.sound', VOL = 0.7, OVERLAP = 10;       // where the choice is kept · how loud (0 to 1) · seconds by which each pass of the piece overlaps the last
  const root = document.documentElement, btn = document.getElementById('sound'), label = document.getElementById('sound-t'); if (!btn) return;
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) { btn.hidden = true; return; }

  const read = () => { try { return JSON.parse(sessionStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  let st = read(), on = !!st.on, pos0 = +st.pos || 0;        // on: the visitor wants music · pos0: seconds into the loop to begin from
  let ctx = null, master = null, buf = null, bytes = null, loading = null, anchor = null, next = 0, sleepT = 0;

  const N = 64, OUT = new Float32Array(N); for (let i = 0; i < N; i++) OUT[i] = Math.cos(i / (N - 1) * Math.PI / 2);
  const period = () => buf.duration - OVERLAP;               // one pass of the loop: the piece less the overlap
  const where = () => (anchor ? (anchor.o + Math.max(0, ctx.currentTime - anchor.ts)) % period() : pos0);
  const write = () => { try { sessionStorage.setItem(KEY, JSON.stringify({ on, pos: +where().toFixed(2) })); } catch (e) {} };
  const paint = () => { btn.setAttribute('aria-pressed', String(on)); if (label) label.textContent = on ? 'Sound on' : 'Sound off'; };

  const fetchBytes = () => bytes || (bytes = fetch(SRC).then((r) => { if (!r.ok) throw new Error('sound: ' + r.status); return r.arrayBuffer(); }).catch((e) => { bytes = null; throw e; }));
  const load = () => loading || (loading = fetchBytes().then((ab) => new Promise((res, rej) => ctx.decodeAudioData(ab, res, rej))).then((b) => { buf = b; }).catch((e) => { loading = null; bytes = null; throw e; }));
  const ensure = () => { if (ctx) return; ctx = new AC(); master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination); };

  // One pass of the piece, beginning at ts (the audio clock) from o seconds in. It plays as written (the piece opens softly by itself) and is
  // eased out over its last OVERLAP seconds, on top of its own dying chord; that is when the next pass begins, and that time is returned.
  const voice = (ts, o) => { const s = ctx.createBufferSource(), g = ctx.createGain(), end = ts + period() - o; s.buffer = buf; s.connect(g); g.connect(master);
    g.gain.value = 1; g.gain.setValueCurveAtTime(OUT, end, OVERLAP); s.start(ts, o); s.onended = () => { s.disconnect(); g.disconnect(); }; return end; };
  // Passes are laid down well ahead on the audio clock (not started by timers, which browsers slow down in a background tab).
  const pump = () => { if (!buf || !anchor) return; while (next < ctx.currentTime + 2 * period()) next = voice(next, 0); };
  const begin = () => { const o = Math.min(Math.max(0, pos0 % period()), period() - 0.1), ts = ctx.currentTime + 0.06; anchor = { ts, o }; next = voice(ts, o); pump(); };

  const up = () => { if (!on || document.hidden) return; ensure(); clearTimeout(sleepT);                      // sound, if there should be any
    if (ctx.state !== 'running') { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); }
    if (!buf) { load().then(up, () => {}); return; }
    if (!anchor) begin(); pump();
    const t = ctx.currentTime; master.gain.cancelScheduledValues(t); master.gain.setTargetAtTime(VOL, t, 0.5); };
  const duck = (tc) => { if (!ctx) return; const t = ctx.currentTime; master.gain.cancelScheduledValues(t); master.gain.setTargetAtTime(0, t, tc); };
  const down = (fast) => { if (!ctx) return; duck(fast ? 0.08 : 0.25);                                          // silence, and then the audio clock is stopped, so the music stays where it was
    clearTimeout(sleepT); sleepT = setTimeout(() => { if (ctx && (!on || document.hidden)) { const p = ctx.suspend(); if (p && p.catch) p.catch(() => {}); } }, fast ? 400 : 1300); };

  btn.addEventListener('click', () => { on = !on; paint(); if (on) up(); else down(); write(); });
  const warm = () => { fetchBytes().catch(() => {}); }; btn.addEventListener('pointerenter', warm, { once: true }); btn.addEventListener('focus', warm, { once: true });   // (begin the download when the visitor reaches for the button)
  const unlock = () => { if (on && ctx && ctx.state !== 'running' && !document.hidden) up(); };
  ['pointerdown', 'keydown', 'touchend'].forEach((n) => addEventListener(n, unlock, { capture: true, passive: true }));
  document.addEventListener('visibilitychange', () => { if (document.hidden) { write(); down(true); } else up(); });
  addEventListener('pagehide', write);
  addEventListener('pageshow', (e) => { if (!e.persisted) return; st = read(); on = !!st.on; paint(); if (on) up(); else down(); });   // (back to this page by the browser's Back button: take up whatever was chosen since)
  new MutationObserver(() => { if (on && ctx && (root.classList.contains('leaving') || root.classList.contains('leave'))) { write(); duck(0.09); } }).observe(root, { attributes: true, attributeFilter: ['class'] });   // (the page is leaving for another: the music dips with it, not cut off mid-note)
  setInterval(() => { if (on && anchor && ctx.state === 'running') { pump(); write(); } }, 3000);

  window.__sound = { state: () => ({ on, ctx: ctx ? ctx.state : null, ready: !!buf, pos: buf ? +where().toFixed(2) : pos0, period: buf ? +period().toFixed(2) : null }), node: () => master };   // (for checking)
  paint(); if (on) up();
})();
