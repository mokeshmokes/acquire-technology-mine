'use client';

import { motion } from 'framer-motion';

interface TechnologiesGridProps {
    skills: string[];
}

export default function TechnologiesGrid({ skills }: TechnologiesGridProps) {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-20 left-20 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199,24,56,0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(161,14,38,0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="font-bold text-white mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        Technologies You&apos;ll{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            Master
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Build expertise in cutting-edge technologies and tools used by top companies
                    </p>
                </motion.div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="group relative rounded-2xl p-6 text-center cursor-pointer"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            {/* Hover Glow */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'rgba(199, 24, 56, 0.1)',
                                    boxShadow: '0 0 30px rgba(199, 24, 56, 0.3)',
                                }}
                            />

                            {/* Icon Placeholder - Will show actual tech icons */}
                            <div
                                className="relative w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: 'rgba(199, 24, 56, 0.15)',
                                    border: '1px solid rgba(199, 24, 56, 0.3)',
                                }}
                            >
                                <span className="text-2xl">💻</span>
                            </div>

                            {/* Skill Name */}
                            <p className="relative text-sm md:text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">
                                {skill}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
