'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import FreeCourseVideoBackground from './FreeCourseVideoBackground';
import FreeCourseCard from './FreeCourseCard';
import { freeCoursesData } from '@/data/freeCourses';

export default function FreeCoursesBackground() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { courses } = freeCoursesData;

    // Only generate particles on client-side after mount
    const [particlePositions] = useState(() => ({
        large: Array.from({ length: 8 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            x: Math.random() * 20 - 10,
            duration: 5 + Math.random() * 3,
            delay: Math.random() * 2,
        })),
        small: Array.from({ length: 15 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        })),
    }));

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full overflow-hidden py-32"
        >
            {/* Video Background */}
            <FreeCourseVideoBackground />

            {/* Floating Particles */}
            {isMounted && (
                <div className="absolute inset-0 z-[2] opacity-20 pointer-events-none">
                    {/* Large Particles */}
                    {particlePositions.large.map((particle, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute w-2 h-2 bg-primary rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                filter: 'blur(1px)',
                            }}
                            animate={isVisible ? {
                                y: [0, -30, 0],
                                x: [0, particle.x, 0],
                                opacity: [0.3, 0.6, 0.3],
                            } : {}}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}

                    {/* Small Glowing Dots */}
                    {particlePositions.small.map((dot, i) => (
                        <motion.div
                            key={`dot-${i}`}
                            className="absolute w-1 h-1 bg-primary rounded-full"
                            style={{
                                left: `${dot.left}%`,
                                top: `${dot.top}%`,
                                boxShadow: '0 0 10px rgba(199, 24, 56, 0.8)',
                            }}
                            animate={isVisible ? {
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            } : {}}
                            transition={{
                                duration: dot.duration,
                                repeat: Infinity,
                                delay: dot.delay,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Digital Grid */}
            <div
                className="absolute inset-0 z-[2] opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(199, 24, 56, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(199, 24, 56, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Animated Connection Lines */}
            <svg
                className="absolute inset-0 w-full h-full z-[2] opacity-10 pointer-events-none"
                style={{ willChange: 'opacity' }}
            >
                <motion.line
                    x1="10%"
                    y1="20%"
                    x2="90%"
                    y2="80%"
                    stroke="rgba(199, 24, 56, 0.5)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.line
                    x1="80%"
                    y1="30%"
                    x2="20%"
                    y2="70%"
                    stroke="rgba(199, 24, 56, 0.5)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="30"
                    fill="none"
                    stroke="rgba(199, 24, 56, 0.3)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 0.2 } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                />
            </svg>

            {/* Moving Gradients */}
            <motion.div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 30% 40%, rgba(199, 24, 56, 0.15) 0%, transparent 50%)',
                }}
                animate={isVisible ? {
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                } : {}}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 70% 60%, rgba(122, 0, 25, 0.12) 0%, transparent 50%)',
                }}
                animate={isVisible ? {
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                } : {}}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Section Content */}
            <div className="relative z-[10] container mx-auto px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <div className="inline-block">
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: 'rgba(199, 24, 56, 0.15)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(199, 24, 56, 0.3)',
                                boxShadow: '0 0 20px rgba(199, 24, 56, 0.3)',
                            }}
                        >
                            <motion.div
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    boxShadow: '0 0 8px rgba(199, 24, 56, 0.8)',
                                }}
                            />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                100% Free
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                        <span className="text-white">FREE </span>
                        <span
                            className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(199, 24, 56, 0.4))',
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center text-lg text-white/70 max-w-3xl mx-auto mb-16"
                >
                    Upgrade your career with free technology masterclasses conducted by industry experts.
                    Learn AI, Web Development, Data Science, and more—completely free.
                </motion.p>

                {/* Cards Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="relative z-[10]"
                >
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courses.map((course) => (
                            <FreeCourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
