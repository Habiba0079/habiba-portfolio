import { useEffect, useState } from 'react';

// Types text out one character at a time while `active` is true.
export function useTypewriter(text, active, speed = 14) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    const total = Array.from(text).length;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total);
      return undefined;
    }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= total) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);

  return Array.from(text).slice(0, count).join('');
}
