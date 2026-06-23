'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function GlowCard({
    children,
    className = '',
    glowColor = 'rgba(194, 24, 56, 0.4)',
}: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Radial gradient glow following mouse */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-primary-hover to-primary opacity-20 blur-xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
