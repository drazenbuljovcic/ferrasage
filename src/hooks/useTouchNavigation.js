import { useState, useRef, useCallback, useEffect } from 'react';

export function useTouchNavigation(items, intervalMs = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((minDiff = 50) => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > minDiff) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }, [items.length]);

  return { currentIndex, handleTouchStart, handleTouchMove, handleTouchEnd };
}
