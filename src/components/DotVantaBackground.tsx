'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
    destroy: () => void;
}

interface DotVantaBackgroundProps {
    children: React.ReactNode;
    className?: string;
}

const DotVantaBackground = ({ children, className = '' }: DotVantaBackgroundProps) => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            const loadVanta = async () => {
                try {
                    // Check if VANTA is already loaded
                    if (!window.VANTA) {
                        // Load Three.js from CDN if not already loaded
                        if (!document.querySelector('script[src*="three.min.js"]')) {
                            const threeScript = document.createElement('script');
                            threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
                            threeScript.async = true;

                            threeScript.onload = () => {
                                // Load Vanta.js DOTS effect from CDN
                                if (!document.querySelector('script[src*="vanta.dots.min.js"]')) {
                                    const vantaScript = document.createElement('script');
                                    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
                                    vantaScript.async = true;

                                    vantaScript.onload = () => {
                                        // Wait a bit for VANTA to initialize
                                        setTimeout(() => {
                                            if (vantaRef.current && window.VANTA) {
                                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                const vantaDots = (window.VANTA as any).DOTS;
                                                if (vantaDots) {
                                                    const effect = vantaDots({
                                                        el: vantaRef.current,
                                                        mouseControls: true,
                                                        touchControls: true,
                                                        gyroControls: false,
                                                        minHeight: 200.00,
                                                        minWidth: 200.00,
                                                        scale: 1.00,
                                                        scaleMobile: 1.00,
                                                        color: 0xBD3F3F,
                                                        backgroundColor: 0x0D0D0D,
                                                        size: 3.00,
                                                        showLines: false,
                                                        spacing: 35.00
                                                    });
                                                    setVantaEffect(effect);
                                                }
                                            }
                                        }, 100);
                                    };
                                    document.head.appendChild(vantaScript);
                                }
                            };
                            document.head.appendChild(threeScript);
                        }
                    } else {
                        // VANTA is already loaded
                        if (vantaRef.current && window.VANTA) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const vantaDots = (window.VANTA as any).DOTS;
                            if (vantaDots) {
                                const effect = vantaDots({
                                    el: vantaRef.current,
                                    mouseControls: true,
                                    touchControls: true,
                                    gyroControls: false,
                                    minHeight: 200.00,
                                    minWidth: 200.00,
                                    scale: 1.00,
                                    scaleMobile: 1.00,
                                    color: 0x3b82f6,
                                    backgroundColor: 0x0a0a0a,
                                    size: 3.00,
                                    showLines: false,
                                    spacing: 35.00
                                });
                                setVantaEffect(effect);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Failed to load Vanta.js DOTS:', error);
                }
            };

            loadVanta();
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className={`w-full h-full ${className}`}>
            {children}
        </div>
    );
};

export default DotVantaBackground;
