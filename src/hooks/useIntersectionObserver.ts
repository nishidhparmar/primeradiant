import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(options: UseIntersectionObserverOptions = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setIsIntersecting(isIntersecting);

                if (isIntersecting && !hasIntersected) {
                    setHasIntersected(true);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [options.threshold, options.rootMargin, hasIntersected]);

    return { ref, isIntersecting, hasIntersected };
};
