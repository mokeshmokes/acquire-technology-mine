'use client';

import { motion } from 'framer-motion';
import { Users, Video, Briefcase, Star } from 'lucide-react';

export default function FloatingStatsCard() {
    const stats = [
        { icon: Users, label: '1200+', sublabel: 'Students', color: 'text-primary' },
        { icon: Video, label: 'Live', sublabel: 'Classes', color: 'text-primary' },
        { icon: Briefcase, label: '100%', sublabel: 'Placement', color: 'text-primary' },
        { icon: Star, label: '4.9', sublabel: 'Rating', color: 'text-primary' },
    ];

    return (
        <motion.div
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className="relative"
        >
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary-hover/30 to-primary/30 rounded-3xl blur-2xl opacity-50" />
            <motion.div
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-hover/20 to-primary/20 rounded-3xl blur-xl"
            />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />

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
                            {/* Icon with enhanced glow */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl group-hover:bg-primary/40 transition-all" />
                                <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 p-2.5 rounded-full border border-primary/30">
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                            </div>

                            {/* Label - Larger number */}
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

                {/* Bottom Accent Line with animation */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative mt-4 h-0.5 rounded-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <motion.div
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
