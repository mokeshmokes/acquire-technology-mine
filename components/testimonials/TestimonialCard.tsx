'use client';

import { motion } from 'framer-motion';
import { Star, Calendar, TrendingUp, Award } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                y: -8,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[28px] p-8 h-full"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 0, 70, 0.15)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
            }}
        >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

            {/* Brighter Background on Hover */}
            <div className="absolute inset-0 rounded-[28px] bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500" />

            {/* Content */}
            <div className="relative space-y-6">
                {/* Top Section - Student Info */}
                <div className="flex items-start gap-4">
                    {/* Student Image */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
                        style={{
                            border: '2px solid rgba(255, 0, 60, 0.3)',
                            boxShadow: '0 10px 30px rgba(122, 0, 25, 0.4)',
                            background: 'linear-gradient(135deg, rgba(122, 0, 25, 0.3), rgba(194, 24, 56, 0.2))',
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-primary/40 to-primary-hover/40">
                            {testimonial.name.charAt(0)}
                        </div>
                    </motion.div>

                    {/* Student Details */}
                    <div className="flex-1 space-y-1">
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-primary font-semibold">{testimonial.course}</p>
                        <p className="text-sm text-muted">
                            {testimonial.role} @ {testimonial.company}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5"
                                style={{
                                    fill: i < Math.floor(testimonial.rating) ? '#FFD700' : 'none',
                                    color: i < Math.floor(testimonial.rating) ? '#FFD700' : '#666',
                                }}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-white">
                        {testimonial.rating.toFixed(1)} / 5
                    </span>
                </div>

                {/* Feedback */}
                <div className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif leading-none">
                        "
                    </div>
                    <p className="text-base text-white/80 leading-relaxed relative z-10 pl-6">
                        {testimonial.feedback}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {/* Course Completed */}
                    <div className="text-center space-y-1">
                        <div className="flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-xs text-muted">Duration</p>
                        <p className="text-sm font-semibold text-white">
                            {testimonial.stats.courseCompleted}
                        </p>
                    </div>

                    {/* Placement */}
                    <div className="text-center space-y-1">
                        <div className="flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-xs text-muted">Package</p>
                        <p className="text-sm font-semibold text-white">
                            {testimonial.stats.placement}
                        </p>
                    </div>

                    {/* Year */}
                    <div className="text-center space-y-1">
                        <div className="flex items-center justify-center">
                            <Award className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-xs text-muted">Year</p>
                        <p className="text-sm font-semibold text-white">{testimonial.stats.year}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
