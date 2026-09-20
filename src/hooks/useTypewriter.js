import { useEffect, useState } from 'react';

// Counts up to `total` characters, one every `speed` ms, while `active` is true.
export function useTypedCount(total, active, speed = 18) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
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
  }, [active, total, speed]);

  return count;
}
