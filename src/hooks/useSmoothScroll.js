import { useCallback } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function useSmoothScroll() {
  const smoothScroll = useCallback((targetY, duration = 800) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const scrollToSection = useCallback(
    (sectionId, headerHeight = 80) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;
        smoothScroll(offsetPosition);
      }
    },
    [smoothScroll],
  );

  const scrollToTop = useCallback(
    (duration = 600) => {
      smoothScroll(0, duration);
    },
    [smoothScroll],
  );

  return { smoothScroll, scrollToSection, scrollToTop };
}
