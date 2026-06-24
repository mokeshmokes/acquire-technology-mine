'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth spring physics for progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-black/20 backdrop-blur-sm">
            <motion.div
                className="h-full origin-left"
                style={{
                    scaleX,
                    background: 'linear-gradient(90deg, #8B0000 0%, #A00000 50%, #C0392B 100%)',
                }}
            />
        </div>
    );
}
