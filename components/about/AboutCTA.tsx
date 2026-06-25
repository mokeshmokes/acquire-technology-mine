'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ctaData } from '@/data/aboutUs';

export default function AboutCTA() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-32 px-6 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(122, 0, 25, 0.4), rgba(45, 0, 0, 0.6), rgba(196, 0, 47, 0.4))',
                    }}
                />
                {/* Gradient Orbs — CSS keyframes keep these off the JS thread */}
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 blur-[120px] rounded-full animate-orb-1"
                    style={{ willChange: 'transform, opacity' }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-hover/20 blur-[140px] rounded-full animate-orb-2"
                    style={{ willChange: 'transform, opacity' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                    {ctaData.heading}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
                >
                    {ctaData.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap gap-6 justify-center pt-4"
                >
                    {ctaData.buttons.map((button) => (
                        <button
                            key={button.label}
                            className={`group relative px-10 py-5 font-semibold text-lg rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 ${button.variant === 'primary'
                                    ? 'bg-primary hover:bg-primary-hover text-white'
                                    : 'bg-white text-primary hover:bg-white/90'
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative">{button.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex items-center justify-center gap-8 pt-8"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="text-white/80 text-sm">Expert Mentors</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="text-white/80 text-sm">Real Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="text-white/80 text-sm">Job Support</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
