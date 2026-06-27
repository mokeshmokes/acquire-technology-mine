'use client';

import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CourseProject } from '@/data/courseData';

interface ProjectsSectionProps {
    projects: CourseProject[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background with animated orbs */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0C080A]" />
                <div
                    className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 24, 56, 0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-12">
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
                            Real-World Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Build production-ready projects for your portfolio
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl"
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
                                        background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.1), rgba(161, 14, 38, 0.1))',
                                    }}
                                />

                                <div className="relative">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6"
                                        style={{
                                            background: 'rgba(199, 24, 56, 0.15)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <Code2 className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs rounded-full text-white/80"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Icon */}
                                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ExternalLink className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
