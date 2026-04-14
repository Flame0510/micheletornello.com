'use client';

import { useState, useEffect } from 'react';

export function useCounter(target: number, isInView: boolean, duration = 1200) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    setCount(0);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
}
