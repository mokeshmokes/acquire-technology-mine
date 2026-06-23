'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, Play } from 'lucide-react';
import CourseProgress from './CourseProgress';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

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
        icon: any;
        gradient: string;
    };
    index: number;
}

export default function LiveCourseCard({ course, index }: LiveCourseCardProps) {
    const Icon = course.icon;
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 100,
                opacity: 0,
                scale: 0.92,
                rotationX: 8,
                filter: 'blur(10px)',
                duration: 0.8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                    end: 'top 60%',
                    toggleActions: 'play none none none',
                },
                delay: (index % 4) * 0.15,
            });
        });

        return () => ctx.revert();
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="group relative h-full min-h-[620px]"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card Container - Perfect Flexbox Alignment */}
            <div className="relative h-full bg-gradient-to-br from-[#12080C] to-[#080B0D] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:translate-y-[-12px] hover:rotate-y-[2deg] hover:rotate-x-[2deg] transition-all duration-500">
                {/* Animated Light Sweep */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, rgba(199, 24, 56, 0.15) 50%, transparent 100%)',
                        animation: 'sweep 2s linear infinite',
                    }}
                />

                <style jsx>{`
                    @keyframes sweep {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(200%);
                        }
                    }
                `}</style>

                {/* Top Gradient Background - Fixed Height */}
                <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${course.gradient}`} />

                {/* Live Badge - Fixed Position */}
                <div className="relative p-4 z-20 flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full">
                        <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            Live Now
                        </span>
                    </div>
                </div>

                {/* Icon Illustration - Fixed Height Container */}
                <div className="relative flex items-center justify-center h-[140px] z-20 flex-shrink-0">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                            <Icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                        </div>
                    </motion.div>
                </div>

                {/* Content Section - Flexible Growth */}
                <div className="relative p-6 pt-4 flex flex-col flex-1 z-20">
                    {/* Title - Fixed Height */}
                    <div className="h-[60px] mb-4 flex flex-col justify-start">
                        <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
                            {course.title}
                        </h3>
                        {course.subtitle && (
                            <p className="text-xs text-primary line-clamp-1">{course.subtitle}</p>
                        )}
                    </div>

                    {/* Tags - Fixed Height */}
                    <div className="h-[32px] mb-4 flex flex-wrap gap-1.5 overflow-hidden">
                        {course.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-[10px] font-medium bg-primary/10 text-primary border border-primary/20 rounded-full whitespace-nowrap"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Info Grid - Fixed Height */}
                    <div className="grid grid-cols-2 gap-3 text-xs mb-4 h-[56px]">
                        <div>
                            <div className="text-muted mb-1">Mentor</div>
                            <div className="font-semibold text-white truncate">{course.mentor}</div>
                        </div>
                        <div>
                            <div className="text-muted mb-1">Next Session</div>
                            <div className="flex items-center gap-1 font-semibold text-white">
                                <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="truncate">{course.session.day}</span>
                            </div>
                        </div>
                    </div>

                    {/* Seats & Progress - Fixed Height */}
                    <div className="flex items-center justify-between mb-4 h-[100px]">
                        <div className="text-xs">
                            <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                                <Users className="w-3 h-3 text-primary" />
                                <span>{course.seats} Seats</span>
                            </div>
                            <div className="text-muted">{course.enrolled} enrolled</div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="scale-75 origin-center">
                                <CourseProgress progress={course.progress} delay={index * 0.05} />
                            </div>
                        </div>
                    </div>

                    {/* Spacer - Pushes buttons to bottom */}
                    <div className="flex-1" />

                    {/* CTA Buttons - Always at Bottom - Fixed Height */}
                    <div className="grid grid-cols-2 gap-2 h-[48px] mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative px-3 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-xl shadow-lg transition-all duration-300 overflow-hidden group/btn"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-center gap-1.5">
                                <Play className="w-3 h-3" fill="white" />
                                <span>Watch</span>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-3 py-2.5 bg-surface border border-primary/30 hover:border-primary text-white text-xs font-semibold rounded-xl transition-all duration-300 group/btn"
                        >
                            <div className="flex items-center justify-center gap-1.5">
                                <span>Enroll</span>
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity z-30" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity z-30" />
            </div>
        </div>
    );
}
