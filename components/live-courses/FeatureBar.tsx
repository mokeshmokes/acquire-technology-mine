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
            className="relative"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />

            {/* Container */}
            <div className="relative bg-[#12080C]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
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
                                className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.div>
                                <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
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
