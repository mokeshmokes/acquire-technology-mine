'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { statisticsData } from '@/data/aboutUs';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest));
        });

        return unsubscribe;
    }, [springValue]);

    return (
        <div ref={ref}>
            <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                {displayValue}
                {suffix}
            </span>
        </div>
    );
}

export default function AboutStatistics() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-[28px] p-12"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(18px)',
                        border: '1px solid rgba(255, 0, 60, 0.18)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statisticsData.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                className="text-center space-y-2"
                            >
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="text-sm text-muted uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
