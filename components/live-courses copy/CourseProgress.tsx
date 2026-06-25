'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CourseProgressProps {
    progress: number;
    delay?: number;
}

export default function CourseProgress({ progress, delay = 0 }: CourseProgressProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = progress / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                setCount(Math.min(Math.round(currentStep * increment), progress));

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);

            return () => clearInterval(timer);
        }
    }, [isInView, progress]);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (count / 100) * circumference;

    return (
        <div ref={ref} className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                />
                {/* Progress circle */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
                    transition={{ duration: 2, delay, ease: 'easeOut' }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C21838" />
                        <stop offset="100%" stopColor="#7A0019" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Percentage text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: delay + 0.5, duration: 0.5 }}
                >
                    {count}%
                </motion.span>
                <span className="text-xs text-muted">Filled</span>
            </div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
