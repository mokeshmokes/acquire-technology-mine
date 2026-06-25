'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, Play } from 'lucide-react';
import CourseProgress from './CourseProgress';
import Course3DAnimation from './Course3DAnimation';

interface LiveCourseCardProps {
    course: {
        id: string;
        title: string;
        subtitle: string;
        tags: string[];
        mentor: string;
        session: {
            day: string;
            time: string;
        };
        seats: number;
        enrolled: number;
        progress: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: any;
        gradient: string;
    };
    index: number;
}

export default function LiveCourseCard({ course, index }: LiveCourseCardProps) {
    return (
        <div
            className="group relative h-full min-h-[620px]"
            style={{ perspective: '1000px' }}
        >
            {/* Glass Card Container */}
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                    background: 'rgba(20, 20, 28, 0.35)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    willChange: 'transform',
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Top Image Panel */}
                <div
                    className="absolute top-0 left-0 right-0 h-48 z-10"
                    style={{
                        background: `linear-gradient(135deg, rgba(122, 0, 25, 0.2) 0%, rgba(199, 24, 56, 0.15) 50%, rgba(161, 14, 38, 0.1) 100%)`,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                />

                {/* Glass Live Badge */}
                <div className="relative p-4 z-20 flex-shrink-0">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(199, 24, 56, 0.2)',
                            border: '1px solid rgba(199, 24, 56, 0.3)',
                            boxShadow: '0 0 20px rgba(199, 24, 56, 0.4)',
                        }}
                    >
                        <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            Live Now
                        </span>
                    </div>
                </div>

                {/* 3D Animation Illustration */}
                <div className="relative h-[140px] z-20 flex-shrink-0">
                    <Course3DAnimation courseId={course.id} />
                </div>

                {/* Content Section */}
                <div className="relative p-6 pt-4 flex flex-col flex-1 z-20">
                    {/* Title */}
                    <div className="h-[60px] mb-4 flex flex-col justify-start">
                        <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
                            {course.title}
                        </h3>
                        {course.subtitle && (
                            <p className="text-xs text-primary line-clamp-1">{course.subtitle}</p>
                        )}
                    </div>

                    {/* Skill Tags */}
                    <div className="h-[32px] mb-4 flex flex-wrap gap-1.5 overflow-hidden">
                        {course.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-[10px] font-medium text-white/80 rounded-full whitespace-nowrap border"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderColor: 'rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs mb-4 h-[56px]">
                        <div>
                            <div className="text-white/50 mb-1">Mentor</div>
                            <div className="font-semibold text-white truncate">{course.mentor}</div>
                        </div>
                        <div>
                            <div className="text-white/50 mb-1">Next Session</div>
                            <div className="flex items-center gap-1 font-semibold text-white">
                                <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="truncate">{course.session.day}</span>
                            </div>
                        </div>
                    </div>

                    {/* Seats & Progress */}
                    <div className="flex items-center justify-between mb-4 h-[100px]">
                        <div className="text-xs">
                            <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                                <Users className="w-3 h-3 text-primary" />
                                <span>{course.seats} Seats</span>
                            </div>
                            <div className="text-white/50">{course.enrolled} enrolled</div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="scale-75 origin-center">
                                <CourseProgress progress={course.progress} delay={index * 0.05} />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1" />

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-2 gap-2 h-[48px] mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.8) 0%, rgba(161, 14, 38, 0.9) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 0 20px rgba(199, 24, 56, 0.3)',
                            }}
                        >
                            <div className="flex items-center justify-center gap-1.5">
                                <Play className="w-3 h-3" fill="white" />
                                <span>Watch</span>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl transition-all duration-300 group/btn overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, rgba(199, 24, 56, 1) 0%, rgba(161, 14, 38, 1) 100%)' }}
                            />
                            <div className="relative flex items-center justify-center gap-1.5">
                                <span>Enroll</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
