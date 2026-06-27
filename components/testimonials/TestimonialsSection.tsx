'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    testimonialsData,
    testimonialSectionData,
} from '@/data/testimonials';
import TestimonialCarousel from './TestimonialCarousel';

export default function TestimonialsSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { badge, heading, subtitle } = testimonialSectionData;

    return (
        <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-6 overflow-hidden bg-background">
            {/* Background Effects */}
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

                {/* Floating Red Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                            left: `${(i * 8 + 10) % 100}%`,
                            top: `${(i * 13 + 5) % 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.3,
                        }}
                    />
                ))}

                {/* Soft Glowing Circles */}
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
                        className="w-[600px] h-[600px] rounded-full"
                        style={{
                            border: '1px solid rgba(255, 0, 60, 0.08)',
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
                        className="w-[400px] h-[400px] rounded-full"
                        style={{
                            border: '1px solid rgba(255, 0, 60, 0.12)',
                        }}
                    />
                </motion.div>

                {/* Glass Blobs */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary-hover/10 to-transparent blur-3xl"
                />

                {/* Animated Gradient Lights */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <motion.div
                        className="absolute top-1/4 left-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            x: [0, 100, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            x: [0, -100, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                    />
                </div>

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
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6"
                >
                    {/* Badge */}
                    <div className="inline-block">
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 0, 60, 0.2)',
                                boxShadow: '0 10px 30px rgba(122, 0, 25, 0.3)',
                            }}
                        >
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                {badge}
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}>
                        {heading.main}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            {heading.highlight}
                        </span>
                        {heading.suffix}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <TestimonialCarousel testimonials={testimonialsData} />
                </motion.div>
            </div>
        </section>
    );
}
