declare module 'vanta/dist/vanta.net.min.js' {
    const vantaNet: unknown;
    export default vantaNet;
}

declare module 'vanta/dist/vanta.dots.min.js' {
    const vantaDots: unknown;
    export default vantaDots;
}

declare global {
    interface Window {
        VANTA?: {
            NET?: (config: {
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
            }) => {
                destroy: () => void;
            };
            DOTS?: (config: {
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
                size?: number;
                showLines?: boolean;
                spacing?: number;
            }) => {
                destroy: () => void;
            };
        };
    }
}
