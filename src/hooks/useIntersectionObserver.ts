import { useEffect, useState } from "react";

interface UseIntersectionObserverReturn {
  ref: (node: Element | null) => void;
  isVisible: boolean;
}

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): UseIntersectionObserverReturn => {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return { ref: setRef, isVisible };
};
