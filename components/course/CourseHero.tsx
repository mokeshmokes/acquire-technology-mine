'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Brain, Database, Code2, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';
import { CourseIconName } from '@/data/courseData';

interface CourseHeroProps {
    title: string;
    subtitle: string;
    iconName: CourseIconName;
}

const iconMap = {
    Brain,
    Database,
    Code2,
    Cloud,
    Shield,
};

export default function CourseHero({
    title,
    subtitle,
    iconName,
}: CourseHeroProps) {
    const Icon = iconMap[iconName];
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Static Background - No Video */}
            <div className="absolute inset-0 z-0">
                {/* Premium Dark Gradient Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #050505 0%, #1a0a0f 25%, #0a0506 50%, #1a0a0f 75%, #050505 100%)',
                    }}
                />
                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: 'radial-gradient(circle at 30% 50%, rgba(199, 24, 56, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(161, 14, 38, 0.1) 0%, transparent 50%)',
                    }}
                />
                {/* Subtle vignette */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 5, 5, 0.6) 100%)',
                    }}
                />
                {/* Noise texture for depth */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{
                            background: 'rgba(199, 24, 56, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 0 40px rgba(199, 24, 56, 0.3)',
                        }}
                    >
                        <Icon className="w-10 h-10 text-primary" />
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="#enroll">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.9) 0%, rgba(161, 14, 38, 1) 100%)',
                                boxShadow: '0 0 30px rgba(199, 24, 56, 0.4)',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative flex items-center gap-2">
                                Enroll Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </Link>

                    <Link href="#syllabus">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 rounded-xl font-semibold text-white"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Download Brochure
                            </span>
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-2 text-white/60"
                    >
                        <span className="text-sm">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
