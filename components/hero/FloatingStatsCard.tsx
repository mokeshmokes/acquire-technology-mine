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
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary-hover/20 to-primary/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />

            {/* Card */}
            <div className="relative border border-white/15 rounded-2xl p-4 shadow-2xl"
                style={{ background: 'rgba(18,6,10,0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />

                {/* 2×2 grid */}
                <div className="relative grid grid-cols-2 gap-2">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-white/5 hover:bg-white/8 border border-white/8 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="bg-gradient-to-br from-primary/25 to-primary/10 p-2 rounded-full border border-primary/30">
                                <stat.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-lg font-bold text-white leading-none">{stat.label}</span>
                            <span className="text-[10px] font-medium text-white/60">{stat.sublabel}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative mt-3 h-0.5 rounded-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                </motion.div>
            </div>
        </div>
    );
}
