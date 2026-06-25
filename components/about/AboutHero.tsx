'use client';

import { motion } from 'framer-motion';
import { aboutHeroData } from '@/data/aboutUs';
import AboutHeroVideoBackground from './AboutHeroVideoBackground';

export default function AboutHero() {
    const { badge, heading, description, buttons, image } = aboutHeroData;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Video Background */}
            <AboutHeroVideoBackground />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-primary/30 rounded-full">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    {badge}
                                </span>
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-3">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                            >
                                {heading.main}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent leading-[1.1]"
                            >
                                {heading.highlight}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                            >
                                {heading.suffix}
                            </motion.h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg text-muted leading-relaxed max-w-2xl"
                        >
                            {description}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            {buttons.map((button, index) => (
                                <button
                                    key={button.label}
                                    className={`group relative px-8 py-4 font-semibold rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 ${button.variant === 'primary'
                                            ? 'bg-primary hover:bg-primary-hover text-white'
                                            : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative">{button.label}</span>
                                </button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Floating Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:block"
                    >
                        {/* Glow Behind Card */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

                        {/* Glass Card */}
                        <div
                            className="relative rounded-[28px] overflow-hidden animate-float-vertical-large"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(18px)',
                                border: '1px solid rgba(255, 0, 60, 0.18)',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                            }}
                        >
                            {/* Placeholder Image */}
                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-surface to-primary-hover/20 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <svg
                                            className="w-16 h-16 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-white/50 text-sm">Hero Image Placeholder</p>
                                    <p className="text-white/30 text-xs mt-2">
                                        Replace with mentor/students image
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
