import { useState, useEffect } from 'react';

export function useScrollPosition(triggerRef) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const heroBottom =
          triggerRef.current.offsetTop + triggerRef.current.offsetHeight;
        setShowScrollTop(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerRef]);

  return showScrollTop;
}
