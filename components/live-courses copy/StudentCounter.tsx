'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StudentCounterProps {
    count: number;
    label: string;
}

export default function StudentCounter({ count, label }: StudentCounterProps) {
    const [displayCount, setDisplayCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 50;
            const increment = count / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                setDisplayCount(Math.min(Math.round(currentStep * increment), count));

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);

            return () => clearInterval(timer);
        }
    }, [isInView, count]);

    // Generate random avatar colors
    const avatarColors = ['bg-primary', 'bg-primary-hover', 'bg-primary/80', 'bg-primary/60'];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
        >
            {/* Avatar Group */}
            <div className="flex items-center">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className={`w-12 h-12 rounded-full ${avatarColors[index]
                            } border-2 border-background flex items-center justify-center ${index > 0 ? '-ml-3' : ''
                            } hover:scale-110 transition-transform`}
                        whileHover={{ y: -5, zIndex: 10 }}
                    >
                        <span className="text-white font-semibold text-sm">
                            {String.fromCharCode(65 + index)}
                        </span>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-surface border-2 border-primary/30 flex items-center justify-center -ml-3 hover:scale-110 transition-transform"
                    whileHover={{ y: -5, zIndex: 10 }}
                >
                    <span className="text-primary font-semibold text-xs">+{displayCount - 4}</span>
                </motion.div>
            </div>

            {/* Counter */}
            <div>
                <div className="text-3xl font-bold text-white tabular-nums">
                    {displayCount}+
                </div>
                <div className="text-sm text-muted">{label}</div>
            </div>
        </motion.div>
    );
}
