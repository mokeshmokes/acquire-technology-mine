'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    delay?: number;
}

export default function AnimatedCounter({ value, duration = 2, delay = 0 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const timeout = setTimeout(() => {
            let startTime: number | null = null;
            const startValue = 0;
            const endValue = value;

            const animate = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(endValue);
                }
            };

            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [value, duration, delay, isInView]);

    return (
        <motion.span
            ref={ref}
            className="text-3xl font-bold text-white tabular-nums"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            {count.toLocaleString()}
        </motion.span>
    );
}
