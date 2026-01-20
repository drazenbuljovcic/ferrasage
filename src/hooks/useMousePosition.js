import { useState, useCallback } from 'react';

export function useMousePosition() {
  const [mousePositions, setMousePositions] = useState({});

  const handleMouseMove = useCallback((e, index, elementRef) => {
    const rect = elementRef?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePositions((prev) => ({ ...prev, [index]: { x, y } }));
    }
  }, []);

  const handleTouchMove = useCallback((e, index, elementRef) => {
    const touch = e.touches[0];
    const rect = elementRef?.getBoundingClientRect();
    if (rect && touch) {
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      setMousePositions((prev) => ({ ...prev, [index]: { x, y } }));
    }
  }, []);

  const handleReset = useCallback(() => {
    setMousePositions({});
  }, []);

  return { mousePositions, handleMouseMove, handleTouchMove, handleReset };
}
