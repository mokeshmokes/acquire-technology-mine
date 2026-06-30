'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
}

interface FeatureBarProps {
    features: Feature[];
}

export default function FeatureBar({ features }: FeatureBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
        >
            {/* Ambient Background Glow (pulsing red aura) */}
            <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-hover/10 to-primary/20 rounded-3xl blur-2xl -z-10"
                animate={{
                    opacity: [0.5, 0.85, 0.5],
                    scale: [0.98, 1.02, 0.98]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Neon Border Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/40 via-primary-hover/60 to-primary/40 rounded-2xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            {/* Specular Sweep (shine) across the card */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl opacity-40">
                <div
                    className="absolute inset-0 animate-spectral-sweep"
                    style={{
                        background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
                    }}
                />
            </div>

            {/* Border Sweep */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-30 overflow-hidden">
                <div className="absolute inset-0 animate-border-sweep"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(199,24,56,0.3) 50%, transparent 100%)',
                    }}
                />
            </div>

            {/* Container */}
            <div className="relative bg-[#12080C]/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(199,24,56,0.2)] transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),_0_0_40px_rgba(199,24,56,0.35)]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center space-y-3 group/item cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                    className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shadow-[0_0_15px_rgba(232,25,44,0.1)] group-hover/item:shadow-[0_0_25px_rgba(232,25,44,0.5)]"
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-primary transition-colors">
                                    {feature.title}
                                </h4>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
