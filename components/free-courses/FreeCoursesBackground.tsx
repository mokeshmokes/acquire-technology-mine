'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import FreeCourseCard from './FreeCourseCard';
import { freeCoursesData } from '@/data/freeCourses';

export default function FreeCoursesBackground() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { courses } = freeCoursesData;

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full overflow-hidden py-32 bg-background"
        >
            {/* Static Background with Gradients */}
            <div className="absolute inset-0">
                {/* Base Dark Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-[#1E2125] to-background" />

                {/* Animated Red Gradient Orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
                    style={{
                        animation: 'pulse-glow 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-hover/15 blur-[140px]"
                    style={{
                        animation: 'pulse-glow-delayed 10s ease-in-out infinite',
                    }}
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

            {/* Floating Particles — pure CSS, zero JS per frame */}
            <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary particle-float"
                        style={{
                            width: i % 3 === 0 ? '6px' : '3px',
                            height: i % 3 === 0 ? '6px' : '3px',
                            left: `${(i * 10 + 5) % 100}%`,
                            top: `${(i * 13 + 8) % 90}%`,
                            opacity: 0.18,
                            animationDuration: `${5 + (i % 4)}s`,
                            animationDelay: `${(i * 0.5) % 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Digital Grid */}
            <div
                className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(199,24,56,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(199,24,56,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Connection Lines — draw once on enter, no looping */}
            <svg className="absolute inset-0 w-full h-full z-[2] opacity-10 pointer-events-none">
                <motion.line
                    x1="10%" y1="20%" x2="90%" y2="80%"
                    stroke="rgba(199,24,56,0.5)" strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.line
                    x1="80%" y1="30%" x2="20%" y2="70%"
                    stroke="rgba(199,24,56,0.5)" strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.circle
                    cx="50%" cy="50%" r="30"
                    fill="none" stroke="rgba(199,24,56,0.3)" strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 0.2 } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                />
            </svg>

            {/*
             * Ambient gradient blobs — CSS keyframes only.
             * No Framer x/y which would trigger layout calculations per frame.
             */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none animate-blob-1"
                style={{
                    background:
                        'radial-gradient(circle at 30% 40%, rgba(199,24,56,0.13) 0%, transparent 50%)',
                    willChange: 'transform',
                }}
            />
            <div
                className="absolute inset-0 z-[2] pointer-events-none animate-blob-2"
                style={{
                    background:
                        'radial-gradient(circle at 70% 60%, rgba(122,0,25,0.1) 0%, transparent 50%)',
                    willChange: 'transform',
                }}
            />

            {/* Section Content */}
            <div className="relative z-[10] container mx-auto px-6">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-center mb-6"
                >
                    <div className="inline-block">
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: 'rgba(199,24,56,0.15)',
                                border: '1px solid rgba(199,24,56,0.3)',
                                boxShadow: '0 0 20px rgba(199,24,56,0.25)',
                            }}
                        >
                            <div
                                className="w-2 h-2 bg-primary rounded-full animate-dot-pulse"
                                style={{ boxShadow: '0 0 8px rgba(199,24,56,0.8)' }}
                            />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                100% Free
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                        <span className="text-white">FREE </span>
                        <span
                            className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(199,24,56,0.4))',
                            }}
                        >
                            MASTERCLASSES
                        </span>
                    </h2>
                    <p className="text-2xl md:text-3xl font-semibold text-white/90">
                        Learn New Skills For Free
                    </p>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="text-center text-lg text-white/70 max-w-3xl mx-auto mb-16"
                >
                    Upgrade your career with free technology masterclasses conducted by industry experts.
                    Learn AI, Web Development, Data Science, and more—completely free.
                </motion.p>

                {/* Cards Grid — no wrapper motion.div, cards animate themselves */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, i) => (
                        <FreeCourseCard key={course.id} course={course} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
