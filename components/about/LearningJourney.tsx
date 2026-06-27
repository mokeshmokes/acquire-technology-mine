'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { learningJourneyData } from '@/data/aboutUs';

export default function LearningJourney() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20 space-y-4"
                >
                    <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                        Your Learning <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted max-w-2xl mx-auto px-4">
                        A structured path from enrollment to placement
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

                    {/* Vertical Line - Mobile & Tablet */}
                    <div className="lg:hidden absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary to-primary/20" style={{ left: '24px' }} />

                    {/* Timeline Steps */}
                    <div className="grid lg:grid-cols-5 gap-8 md:gap-6 lg:gap-6">
                        {learningJourneyData.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                                    className="relative"
                                >
                                    {/* Mobile & Tablet: Step number on the left */}
                                    <div
                                        className="lg:hidden absolute w-[44px] h-[44px] rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg z-30"
                                        style={{ left: '2px', top: '32px' }}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* Card - Responsive padding and height */}
                                    <div
                                        className="relative rounded-2xl md:rounded-[28px] p-6 md:p-8 text-center lg:hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center ml-[72px] w-[calc(100%-88px)] lg:ml-0 lg:w-full"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(18px)',
                                            border: '1px solid rgba(255, 0, 60, 0.18)',
                                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                                            minHeight: '240px',
                                        }}
                                    >
                                        {/* Icon Circle */}
                                        <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10 mb-4">
                                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>

                                        {/* Subtitle */}
                                        <p className="text-sm text-muted leading-relaxed">{step.subtitle}</p>

                                        {/* Step Number - Desktop Only */}
                                        <div className="hidden lg:block absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Connecting Arrow - Desktop Only */}
                                    {index < learningJourneyData.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-1/2 -translate-y-1/2 z-20">
                                            <svg
                                                className="w-6 h-6 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
