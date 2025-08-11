'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
    destroy: () => void;
}

interface VantaBackgroundProps {
    children: React.ReactNode;
    className?: string;
}

// Type declaration for the VANTA global object
declare global {
    interface Window {
        VANTA?: {
            NET: (config: {
                el: HTMLElement;
                mouseControls?: boolean;
                touchControls?: boolean;
                gyroControls?: boolean;
                minHeight?: number;
                minWidth?: number;
                scale?: number;
                scaleMobile?: number;
                color?: number;
                backgroundColor?: number;
                points?: number;
                maxDistance?: number;
                spacing?: number;
            }) => VantaEffect;
        };
    }
}

const VantaBackground = ({ children, className = '' }: VantaBackgroundProps) => {
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
                                // Load Vanta.js from CDN
                                if (!document.querySelector('script[src*="vanta.net.min.js"]')) {
                                    const vantaScript = document.createElement('script');
                                    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
                                    vantaScript.async = true;

                                    vantaScript.onload = () => {
                                        // Wait a bit for VANTA to initialize
                                        setTimeout(() => {
                                            if (vantaRef.current && window.VANTA) {
                                                const effect = window.VANTA.NET({
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
                                                    points: 15.00,
                                                    maxDistance: 25.00,
                                                    spacing: 20.00
                                                });
                                                setVantaEffect(effect);
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
                            const effect = window.VANTA.NET({
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
                                points: 15.00,
                                maxDistance: 25.00,
                                spacing: 20.00
                            });
                            setVantaEffect(effect);
                        }
                    }
                } catch (error) {
                    console.error('Failed to load Vanta.js:', error);
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

export default VantaBackground;
