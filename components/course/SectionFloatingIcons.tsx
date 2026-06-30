'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface SectionFloatingIconsProps {
    icons: Array<{ emoji: string; label: string }>;
    side?: 'left' | 'right' | 'both';
}

function FloatingIconElement({
    icon,
    position,
    mouseX,
    mouseY,
}: {
    icon: { emoji: string; label: string };
    position: { top: string; left?: string; right?: string };
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });

    // Track element position for mouse interaction
    useEffect(() => {
        if (!ref.current) return;

        const updatePosition = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            setElementPosition({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        };

        updatePosition();
        const handleScroll = () => requestAnimationFrame(updatePosition);

        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Mouse distance calculation
    const distance = useTransform(
        [mouseX, mouseY],
        (values: number[]) => {
            const [mx, my] = values;
            const dx = mx - elementPosition.x;
            const dy = my - elementPosition.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    );

    // Gentle repel effect
    const offsetX = useTransform(distance, [0, 200], [15, 0]);
    const offsetY = useTransform(distance, [0, 200], [15, 0]);

    const springX = useSpring(offsetX, { stiffness: 60, damping: 20 });
    const springY = useSpring(offsetY, { stiffness: 60, damping: 20 });

    // Randomized animation values
    const duration = 6 + Math.random() * 3;
    const delay = Math.random() * 2;

    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-auto cursor-pointer select-none"
            style={{
                ...position,
                x: springX,
                y: springY,
                zIndex: 1,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isHovered ? 0.4 : [0.25, 0.35, 0.25],
                scale: isHovered ? 1.15 : [1, 1.05, 1],
                rotate: [0, 6, -6, 0],
                y: [0, -20, 0],
            }}
            transition={{
                opacity: {
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                },
                scale: {
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                },
                rotate: {
                    duration: duration * 1.5,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                },
                y: {
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                scale: 1.2,
                rotate: 8,
            }}
        >
            <div
                className="text-5xl md:text-6xl lg:text-7xl flex items-center justify-center relative"
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                }}
            >
                {/* Glassmorphism container */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: isHovered
                            ? 'rgba(59, 130, 246, 0.15)'
                            : 'rgba(96, 165, 250, 0.08)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(96, 165, 250, 0.25)',
                        boxShadow: isHovered
                            ? '0 0 60px rgba(59, 130, 246, 0.8), 0 0 30px rgba(96, 165, 250, 0.6)'
                            : '0 0 40px rgba(96, 165, 250, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)',
                        transition: 'all 0.3s ease',
                    }}
                />

                {/* Emoji */}
                <span
                    className="relative z-10 block"
                    style={{
                        filter: isHovered
                            ? 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.9)) brightness(1.3)'
                            : 'drop-shadow(0 0 25px rgba(96, 165, 250, 0.8))',
                        textShadow: '0 0 50px rgba(59, 130, 246, 0.8), 0 0 30px rgba(96, 165, 250, 0.7)',
                        transition: 'filter 0.3s ease',
                    }}
                >
                    {icon.emoji}
                </span>
            </div>
        </motion.div>
    );
}

export default function SectionFloatingIcons({ icons, side = 'both' }: SectionFloatingIconsProps) {
    const [isMounted, setIsMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isMounted) return null;

    // Take only first 2 icons
    const displayIcons = icons.slice(0, 2);

    // Define positions based on side prop
    const positions = side === 'both'
        ? [
            { top: '15%', left: '3%' },
            { top: '60%', right: '3%' },
        ]
        : side === 'left'
            ? [
                { top: '20%', left: '3%' },
                { top: '70%', left: '5%' },
            ]
            : [
                { top: '20%', right: '3%' },
                { top: '70%', right: '5%' },
            ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {displayIcons.map((icon, index) => (
                <FloatingIconElement
                    key={`${icon.label}-${index}`}
                    icon={icon}
                    position={positions[index]}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    index={index}
                />
            ))}
        </div>
    );
}
