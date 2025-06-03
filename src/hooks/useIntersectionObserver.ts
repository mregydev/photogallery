import { useEffect, useState } from 'react';

export const useIntersectionObserver = (
  ref: React.RefObject<Element | null>
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const currentElement=ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [ref]);

  return isIntersecting;
};
