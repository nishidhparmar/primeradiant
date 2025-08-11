import React, { useRef, useEffect, useState } from 'react';
import { Player } from '@lordicon/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedIconProps {
    icon: unknown;
    size?: number;
    className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, size = 100, className = '' }) => {
    const { ref, hasIntersected } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
        rootMargin: '50px',
    });

    const [isHovered, setIsHovered] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);
    const playerRef = useRef<Player>(null);

    // Play animation when icon comes into viewport (only once)
    useEffect(() => {
        if (hasIntersected && playerRef.current && !hasPlayed) {
            playerRef.current.playFromBeginning();
            setHasPlayed(true);
        }
    }, [hasIntersected, hasPlayed]);

    // Play animation on hover (only if it has already played once)
    useEffect(() => {
        if (isHovered && hasPlayed && playerRef.current) {
            playerRef.current.playFromBeginning();
        }
    }, [isHovered, hasPlayed]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            ref={ref}
            className={`${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Player
                ref={playerRef}
                icon={icon}
                size={size}
                colors='primary:white,secondary:#BD3F3F'
            />
        </div>
    );
};

export default AnimatedIcon;
