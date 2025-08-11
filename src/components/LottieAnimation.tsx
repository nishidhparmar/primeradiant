"use client"
import React, { useRef, useEffect, useState } from 'react';
import { AnimationItem } from 'lottie-web';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LottieAnimationProps {
    animationPath: string;
    size?: number;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
    animationPath,
    size = 100,
    className = '',
    loop = true,
    autoplay = true
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);
    const { ref, hasIntersected } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '50px',
    });

    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (containerRef.current && hasIntersected && !isLoaded && !isLoading) {
            console.log('Loading Lottie animation:', animationPath);
            setIsLoading(true);
            
            // Dynamically import lottie-web to avoid SSR issues
            import('lottie-web').then((lottie) => {
                try {
                    const animation = lottie.default.loadAnimation({
                        container: containerRef.current!,
                        renderer: 'svg',
                        loop: loop,
                        autoplay: autoplay,
                        path: animationPath,
                    });

                    animationRef.current = animation;

                    animation.addEventListener('DOMLoaded', () => {
                        console.log('Lottie animation loaded successfully');
                        setIsLoaded(true);
                        setIsLoading(false);
                    });

                    animation.addEventListener('error', (error) => {
                        console.error('Lottie animation error:', error);
                        setError('Failed to load animation');
                        setIsLoading(false);
                    });

                } catch (err) {
                    console.error('Error creating Lottie animation:', err);
                    setError('Failed to create animation');
                    setIsLoading(false);
                }
            }).catch((err) => {
                console.error('Failed to load lottie-web:', err);
                setError('Failed to load animation library');
                setIsLoading(false);
            });

            return () => {
                if (animationRef.current) {
                    animationRef.current.destroy();
                }
            };
        }
    }, [hasIntersected, isLoaded, isLoading, animationPath, loop, autoplay]);

    // Set both refs
    const setRefs = (node: HTMLDivElement | null) => {
        // Set the container ref
        containerRef.current = node;
        
        // Set the intersection observer ref
        if (ref.current !== node) {
            ref.current = node;
        }
    };

    return (
        <div
            ref={setRefs}
            className={`${className}`}
            style={{ width: size, height: size }}
        >
            {isLoading && (
                <div className="text-blue-500 text-sm text-center">
                    Loading animation...
                </div>
            )}
            {error && (
                <div className="text-red-500 text-sm text-center">
                    {error}
                </div>
            )}
            {!isLoading && !error && !isLoaded && (
                <div className="text-gray-500 text-sm text-center">
                    Waiting to load...
                </div>
            )}
        </div>
    );
};

export default LottieAnimation;
