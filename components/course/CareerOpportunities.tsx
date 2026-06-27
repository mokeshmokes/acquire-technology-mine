'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CourseCareer } from '@/data/courseData';

interface CareerOpportunitiesProps {
    careers: CourseCareer[];
}

export default function CareerOpportunities({ careers }: CareerOpportunitiesProps) {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with animated orbs */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0C080A]" />
                <div
                    className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(161, 14, 38, 0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Career Opportunities
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/70"
                        >
                            High-demand roles waiting for skilled professionals
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Careers Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {careers.map((career, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative p-8 rounded-2xl"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.15), rgba(161, 14, 38, 0.15))',
                                    }}
                                />

                                <div className="relative">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: 'rgba(199, 24, 56, 0.15)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            <Briefcase className="w-7 h-7 text-primary" />
                                        </div>
                                        <div
                                            className="px-4 py-2 rounded-lg flex items-center gap-2"
                                            style={{
                                                background: 'rgba(199, 24, 56, 0.2)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            <DollarSign className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-semibold text-white">
                                                {career.salary}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                        {career.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/70 mb-4">{career.description}</p>

                                    {/* Growth Indicator */}
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>High Demand</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-12"
                    >
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
                            <span className="relative">Start Your Career Journey</span>
                        </motion.button>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
