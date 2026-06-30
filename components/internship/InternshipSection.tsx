'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import InternshipCard from './InternshipCard';
import { internships } from '@/data/internships';

export default function InternshipSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, rgba(8,4,6,1) 0%, rgba(15,8,10,1) 50%, rgba(8,4,6,1) 100%)',
            }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(199,24,56,0.15) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(161,14,38,0.15) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(18px)',
                            border: '1px solid rgba(255, 0, 60, 0.18)',
                        }}
                    >
                        <div
                            className="w-2 h-2 bg-primary rounded-full animate-pulse"
                            style={{ boxShadow: '0 0 8px rgba(199,24,56,0.8)' }}
                        />
                        <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                            Internship Programs
                        </span>
                    </div>
                </motion.div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-8 md:mb-12 space-y-4"
                >
                    <h2
                        className="font-bold text-white leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        Launch Your Career with{' '}
                        <span
                            className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent"
                        >
                            Industry Internships
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto px-4 leading-relaxed">
                        Gain practical industry experience by working on real-world projects under expert guidance.
                        Build your portfolio, earn an internship certificate, and prepare yourself for placements with
                        hands-on learning.
                    </p>
                </motion.div>

                {/* Announcement Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mb-12 md:mb-16"
                >
                    <div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(199, 24, 56, 0.3)',
                            boxShadow: '0 0 30px rgba(199,24,56,0.2)',
                        }}
                    >
                        <div
                            className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"
                            style={{ boxShadow: '0 0 10px rgba(199,24,56,0.9)' }}
                        />
                        <span className="text-sm md:text-base font-semibold text-white">
                            We&apos;re accepting applications for a small cohort of talented interns.
                        </span>
                    </div>
                </motion.div>

                {/* Internship Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {internships.map((internship, index) => (
                        <InternshipCard key={internship.id} internship={internship} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
