'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);
    }, [mousePosition, x, y]);

    return (
        <>
            {/* Main cursor glow */}
            <motion.div
                className="fixed pointer-events-none z-50 mix-blend-screen"
                style={{
                    x: x,
                    y: y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl" />
            </motion.div>

            {/* Secondary glow */}
            <motion.div
                className="fixed pointer-events-none z-50 mix-blend-screen"
                style={{
                    x: x,
                    y: y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <div className="w-32 h-32 rounded-full bg-primary-hover opacity-5 blur-2xl" />
            </motion.div>
        </>
    );
}
