'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
    id: string;
    value: number;
    suffix: string;
    label: string;
    decimals?: number;
}

interface TestimonialStatsProps {
    stats: Stat[];
}

export default function TestimonialStats({ stats }: TestimonialStatsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [counts, setCounts] = useState<{ [key: string]: number }>(
        stats.reduce((acc, stat) => ({ ...acc, [stat.id]: 0 }), {})
    );

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const fps = 60;
        const frames = (duration / 1000) * fps;

        stats.forEach((stat) => {
            let frame = 0;
            const increment = stat.value / frames;

            const counter = setInterval(() => {
                frame++;
                setCounts((prev) => ({
                    ...prev,
                    [stat.id]: Math.min(frame * increment, stat.value),
                }));

                if (frame >= frames) {
                    clearInterval(counter);
                    setCounts((prev) => ({
                        ...prev,
                        [stat.id]: stat.value,
                    }));
                }
            }, 1000 / fps);
        });
    }, [isInView, stats]);

    return (
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center space-y-2"
                >
                    {/* Value */}
                    <div className="space-y-1">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent"
                        >
                            {stat.decimals
                                ? counts[stat.id].toFixed(stat.decimals)
                                : Math.floor(counts[stat.id]).toLocaleString()}
                            <span className="text-primary">{stat.suffix}</span>
                        </motion.div>
                    </div>

                    {/* Label */}
                    <p className="text-sm text-muted font-medium">{stat.label}</p>

                    {/* Glow Effect */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.2,
                        }}
                        className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                    />
                </motion.div>
            ))}
        </div>
    );
}
