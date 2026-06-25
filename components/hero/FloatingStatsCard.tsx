'use client';

import { motion } from 'framer-motion';
import { Users, Video, Briefcase, Star } from 'lucide-react';

export default function FloatingStatsCard() {
    const stats = [
        { icon: Users, label: '1200+', sublabel: 'Students' },
        { icon: Video, label: 'Live', sublabel: 'Classes' },
        { icon: Briefcase, label: '100%', sublabel: 'Placement' },
        { icon: Star, label: '4.9', sublabel: 'Rating' },
    ];

    return (
        <div className="relative">
            {/* Static glow — no animation, just a CSS layer */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary-hover/20 to-primary/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none" />

                {/* Grid of Stats */}
                <div className="relative grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="flex flex-col items-center text-center space-y-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="relative">
                                <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 p-2.5 rounded-full border border-primary/30">
                                    <stat.icon className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="space-y-0.5">
                                <span className="text-xl font-bold text-white block">
                                    {stat.label}
                                </span>
                                <span className="text-xs font-medium text-white/70">
                                    {stat.sublabel}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Accent Line — CSS shimmer only */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative mt-4 h-0.5 rounded-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                </motion.div>
            </div>
        </div>
    );
}
