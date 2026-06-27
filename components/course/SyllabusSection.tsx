'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CourseModule } from '@/data/courseData';

interface SyllabusSectionProps {
    syllabus: CourseModule[];
}

export default function SyllabusSection({ syllabus }: SyllabusSectionProps) {
    const [expandedModule, setExpandedModule] = useState<number | null>(0);

    const toggleModule = (index: number) => {
        setExpandedModule(expandedModule === index ? null : index);
    };

    return (
        <section id="syllabus" className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0C080A]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 lg:px-12">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-white mb-4 md:mb-6 px-4"
                            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                        >
                            Complete Syllabus
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Comprehensive curriculum designed by industry experts
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Modules */}
                <ScrollReveal>
                    <div className="space-y-3 md:space-y-4">
                        {syllabus.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-xl md:rounded-2xl overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                {/* Module Header */}
                                <button
                                    onClick={() => toggleModule(index)}
                                    className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 text-left flex-1 min-w-0">
                                        <div
                                            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-white text-sm md:text-base"
                                            style={{
                                                background: 'rgba(199, 24, 56, 0.2)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base md:text-xl font-semibold text-white mb-1 truncate">
                                                {module.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                                                <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                                <span>{module.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedModule === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 ml-2"
                                    >
                                        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
                                    </motion.div>
                                </button>

                                {/* Module Content */}
                                <AnimatePresence>
                                    {expandedModule === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                                                <div
                                                    className="p-4 md:p-6 rounded-lg md:rounded-xl"
                                                    style={{
                                                        background: 'rgba(0, 0, 0, 0.3)',
                                                    }}
                                                >
                                                    <ul className="space-y-2 md:space-y-3">
                                                        {module.topics.map((topic, topicIndex) => (
                                                            <motion.li
                                                                key={topicIndex}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay: topicIndex * 0.05,
                                                                }}
                                                                className="flex items-start gap-2 md:gap-3"
                                                            >
                                                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                                                                <span className="text-sm md:text-base text-white/80">
                                                                    {topic}
                                                                </span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
