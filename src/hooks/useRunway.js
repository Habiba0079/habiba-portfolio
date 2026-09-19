import { useEffect, useState } from 'react';

// Maps the scroll position onto the level: x goes from 0 (start) to 1 (goal),
// and lands exactly on checkpoint i when section i reaches the reference line.
export function useRunway(ids) {
  const [state, setState] = useState({ x: 0, index: 0, moving: false, dir: 1 });

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    let idle;
    let dir = 1;

    const compute = () => {
      frame = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Sections land 4.5rem below the top when you jump to them (see .level scroll-margin-top),
      // so measure from that line: the character then stops exactly on the flag.
      const offset = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4.5 + 6;
      const ref = y + offset;
      const n = ids.length;
      const tops = ids.map((id, k) => {
        if (k === 0) return offset;
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + y : Number.MAX_SAFE_INTEGER;
      });

      let index = 0;
      for (let k = 0; k < n; k += 1) if (tops[k] <= ref) index = k;

      const maxY = document.documentElement.scrollHeight - vh;
      let x;
      if (y >= maxY - 2) {
        x = 1;
        index = n - 1;
      } else if (index >= n - 1) {
        x = 1;
      } else {
        const span = Math.max(1, tops[index + 1] - tops[index]);
        x = (index + Math.min(1, Math.max(0, (ref - tops[index]) / span))) / (n - 1);
      }

      if (y !== lastY) dir = y > lastY ? 1 : -1;
      const moved = y !== lastY;
      lastY = y;

      setState((prev) => {
        const moving = moved ? true : prev.moving;
        if (prev.x === x && prev.index === index && prev.moving === moving && prev.dir === dir) return prev;
        return { x, index, moving, dir };
      });

      if (moved) {
        clearTimeout(idle);
        idle = setTimeout(() => setState((p) => (p.moving ? { ...p, moving: false } : p)), 160);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      ro.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [ids]);

  return state;
}
