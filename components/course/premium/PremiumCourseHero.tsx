'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award, Briefcase, Play } from 'lucide-react';
import { CourseData } from '@/data/courseData';
import RegistrationForm from './RegistrationForm';

interface PremiumCourseHeroProps {
    course: CourseData;
}

export default function PremiumCourseHero({ course }: PremiumCourseHeroProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src={course.heroVideo} type="video/mp4" />
                </video>
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(18,8,12,0.92) 50%, rgba(0,0,0,0.95) 100%)',
                    }}
                />
            </div>

            {/* Container with proper constraints */}
            <div
                className="w-full relative z-10"
                style={{
                    maxWidth: '1400px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '1.25rem',
                    paddingRight: '1.25rem',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    className="grid lg:grid-cols-2 items-start"
                    style={{
                        gap: 'clamp(3rem, 5vw, 4rem)',
                        gridAutoFlow: 'dense',
                        minWidth: 0, // Fix for Chrome grid overflow
                    }}
                >
                    {/* LEFT SIDE - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                        style={{
                            minWidth: 0, // Prevent overflow in Chrome
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3">
                            {/* Rating Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xs md:text-sm text-white font-semibold">4.8 Rating</span>
                            </div>

                            {/* Students Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-xs md:text-sm text-white font-semibold">5000+ Students</span>
                            </div>

                            {/* Placement Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                                style={{
                                    background: 'rgba(199, 24, 56, 0.15)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(199, 24, 56, 0.3)',
                                    boxShadow: '0 0 20px rgba(199, 24, 56, 0.2)',
                                }}
                            >
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-xs md:text-sm text-white font-semibold">Placement Support</span>
                            </div>
                        </div>

                        {/* Course Title */}
                        <div className="space-y-3" style={{ minWidth: 0, width: '100%' }}>
                            <h1
                                className="font-bold text-white leading-tight"
                                style={{
                                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                {course.title}
                            </h1>
                            <p
                                className="text-xl md:text-2xl text-primary font-semibold"
                                style={{
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                {course.subtitle}
                            </p>
                        </div>

                        {/* Description */}
                        <p
                            className="text-base md:text-lg text-white/80 leading-relaxed"
                            style={{
                                maxWidth: '100%',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            {course.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl font-semibold text-white text-base relative overflow-hidden group"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                                    boxShadow: '0 0 30px rgba(199,24,56,0.4)',
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative">Enroll Now</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl font-semibold text-white text-base relative overflow-hidden group"
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                }}
                            >
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5" />
                                    <span>Download Brochure</span>
                                </div>
                            </motion.button>
                        </div>

                        {/* Course Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                            <div className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-primary">5000+</div>
                                <div className="text-sm text-white/60">Students</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                                <div className="text-sm text-white/60">Projects</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                                <div className="text-sm text-white/60">Certificate</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-primary">Live</div>
                                <div className="text-sm text-white/60">Internship</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            minWidth: 0, // Prevent overflow in Chrome
                            width: '100%',
                            boxSizing: 'border-box',
                            maxWidth: '100%',
                        }}
                    >
                        <RegistrationForm courseTitle={course.title} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
