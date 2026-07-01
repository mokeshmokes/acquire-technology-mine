'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import { aboutHeroData } from '@/data/aboutUs';

export default function AboutHero() {
    const { badge, heading, description, buttons } = aboutHeroData;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / innerWidth;
            const y = (clientY - innerHeight / 2) / innerHeight;
            setMousePosition({ x: x * 10, y: y * 10 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* Static Background with Gradients */}
            <div className="absolute inset-0">
                {/* Base Dark Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0A0A0A] to-background" />

                {/* Animated Red Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-hover/15 blur-[140px]"
                />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 0, 60, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255, 0, 60, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
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
                            <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
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
                                className="font-bold text-white leading-[1.1]"
                                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
                            >
                                {heading.main}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent leading-[1.1]"
                                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
                            >
                                {heading.highlight}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="font-bold text-white leading-[1.1]"
                                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
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
                            {buttons.map((button) => (
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

                    {/* Right Side - CEO Image with Effects */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:block"
                    >
                        {/* Background Effects Container */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            {/* Dark Red Radial Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="w-[400px] h-[400px] rounded-full bg-primary/30 blur-[100px]"
                                />
                            </div>

                            {/* Glass Circles */}
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[450px] h-[450px] rounded-full"
                                    style={{
                                        border: '1px solid rgba(255, 0, 60, 0.1)',
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                animate={{
                                    rotate: [360, 0],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[350px] h-[350px] rounded-full"
                                    style={{
                                        border: '1px solid rgba(255, 0, 60, 0.15)',
                                    }}
                                />
                            </motion.div>

                            {/* Floating Particles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-primary/20 rounded-full"
                                    style={{
                                        left: `${20 + i * 10}%`,
                                        top: `${30 + (i % 3) * 20}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.5, 0.2],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}

                            {/* Light Beams */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"
                                    animate={{
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                <motion.div
                                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0"
                                    animate={{
                                        opacity: [0.1, 0.3, 0.1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 1,
                                    }}
                                />
                            </div>

                            {/* Animated Gradient Blobs */}
                            <motion.div
                                animate={{
                                    x: [0, 20, 0],
                                    y: [0, -20, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"
                            />
                            <motion.div
                                animate={{
                                    x: [0, -20, 0],
                                    y: [0, 20, 0],
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                }}
                                className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary-hover/15 to-transparent blur-3xl"
                            />

                            {/* CEO Image Container with Parallax */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    x: mousePosition.x,
                                }}
                                transition={{
                                    duration: 1,
                                    x: { duration: 0.5, ease: 'easeOut' },
                                }}
                                className="relative z-10 w-[90%] h-[500px]"
                            >
                                {/* Floating Animation */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src="/images/mentor/CEO.png"
                                        alt="CEO - Acquiring Technology"
                                        fill
                                        priority
                                        className="object-contain object-bottom"
                                        style={{
                                            maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                            WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Floating Statistic Cards */}

                            {/* Top Left - Rating */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="absolute top-16 left-4 rounded-[18px] p-4 backdrop-blur-md"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 0, 60, 0.25)',
                                    boxShadow: '0 10px 40px rgba(196, 0, 47, 0.3)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-2xl font-bold text-white">4.9</p>
                                <p className="text-xs text-muted">Student Rating</p>
                            </motion.div>

                            {/* Top Right - Students */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="absolute top-20 right-4 rounded-[18px] p-4 backdrop-blur-md"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 0, 60, 0.25)',
                                    boxShadow: '0 10px 40px rgba(196, 0, 47, 0.3)',
                                }}
                            >
                                <Users className="w-6 h-6 text-primary mb-2" />
                                <p className="text-2xl font-bold text-white">5000+</p>
                                <p className="text-xs text-muted">Students</p>
                            </motion.div>

                            {/* Bottom Left - Courses */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="absolute bottom-24 left-4 rounded-[18px] p-4 backdrop-blur-md"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 0, 60, 0.25)',
                                    boxShadow: '0 10px 40px rgba(196, 0, 47, 0.3)',
                                }}
                            >
                                <BookOpen className="w-6 h-6 text-primary mb-2" />
                                <p className="text-2xl font-bold text-white">150+</p>
                                <p className="text-xs text-muted">Courses</p>
                            </motion.div>

                            {/* Bottom Right - Placement */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="absolute bottom-20 right-4 rounded-[18px] p-4 backdrop-blur-md"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 0, 60, 0.25)',
                                    boxShadow: '0 10px 40px rgba(196, 0, 47, 0.3)',
                                }}
                            >
                                <Award className="w-6 h-6 text-primary mb-2" />
                                <p className="text-2xl font-bold text-white">95%</p>
                                <p className="text-xs text-muted">Placement</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="lg:hidden relative w-[80%] h-[400px] mx-auto mt-12"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/images/mentor/CEO.png"
                                alt="CEO - Acquiring Technology"
                                fill
                                priority
                                className="object-contain object-bottom"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
