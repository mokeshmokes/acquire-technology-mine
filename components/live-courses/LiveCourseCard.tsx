'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Clock, Users, ArrowRight, Play } from 'lucide-react';
import CourseProgress from './CourseProgress';
import Course3DAnimation from './Course3DAnimation';
import { useRef, useState } from 'react';

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
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position tracking with MotionValues (doesn't trigger re-renders)
    const rawX = useMotionValue(50);
    const rawY = useMotionValue(50);
    const mouseX = useSpring(rawX, { damping: 25, stiffness: 120 });
    const mouseY = useSpring(rawY, { damping: 25, stiffness: 120 });

    const rotateX = useTransform(mouseY, [0, 100], [7.5, -7.5]);
    const rotateY = useTransform(mouseX, [0, 100], [-7.5, 7.5]);

    // Derived percentages for CSS variables
    const xPct = useTransform(mouseX, (x) => `${x}%`);
    const yPct = useTransform(mouseY, (y) => `${y}%`);

    // 3D Tilt Effect with Mouse Movement
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        rawX.set(x);
        rawY.set(y);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        rawX.set(50);
        rawY.set(50);
    };

    return (
        <div
            ref={cardRef}
            className="group relative h-full min-h-[620px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                '--mouse-x': xPct as unknown as string,
                '--mouse-y': yPct as unknown as string,
            } as React.CSSProperties & Record<string, string | number | undefined>}
        >
            {/* Ambient Outer Glow */}
            <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(199, 24, 56, 0.35) 0%, rgba(122, 0, 25, 0.2) 40%, transparent 70%)`,
                }}
            />

            {/* Glass Card Container */}
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                    background: 'rgba(20, 20, 28, 0.35)',
                    backdropFilter: 'blur(12px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: `
                        0 20px 50px rgba(0, 0, 0, 0.45),
                        0 0 30px rgba(180, 0, 40, 0.18),
                        0 0 80px rgba(255, 0, 70, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.08)
                    `,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                animate={{
                    y: isHovered ? -10 : 0,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                }}
            >
                {/* Enhanced Border Glow on Hover */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: `0 0 20px rgba(199, 24, 56, 0.3)`,
                    }}
                />

                {/* Specular Light Reflection */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[8000ms] pointer-events-none z-10"
                    style={{
                        background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%)',
                        animation: 'spectralSweep 10s ease-in-out infinite',
                    }}
                />

                {/* Cursor Following Radial Light */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[5]"
                    style={{
                        background: `radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(199, 24, 56, 0.15) 0%, transparent 70%)`,
                    }}
                />

                {/* Floating Background Particles */}
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                    <div
                        className="absolute w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-slow"
                        style={{ top: '10%', left: '20%' }}
                    />
                    <div
                        className="absolute w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float-slower"
                        style={{ top: '60%', right: '15%' }}
                    />
                    <div
                        className="absolute w-16 h-16 bg-white/5 rounded-full blur-xl animate-float-slow"
                        style={{ bottom: '20%', left: '40%' }}
                    />
                </div>

                {/* Holographic Top Image Panel */}
                <div
                    className="absolute top-0 left-0 right-0 h-48 z-10"
                    style={{
                        background: `linear-gradient(135deg, rgba(122, 0, 25, 0.2) 0%, rgba(199, 24, 56, 0.15) 50%, rgba(161, 14, 38, 0.1) 100%)`,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                >
                    {/* Moving Gradient Inside Panel */}
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            background: 'linear-gradient(45deg, transparent 30%, rgba(199, 24, 56, 0.1) 50%, transparent 70%)',
                            animation: 'gradientMove 6s ease-in-out infinite',
                        }}
                    />
                </div>

                {/* Glass Live Badge */}
                <div className="relative p-4 z-20 flex-shrink-0">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(199, 24, 56, 0.2)',
                            border: '1px solid rgba(199, 24, 56, 0.3)',
                            boxShadow: '0 0 20px rgba(199, 24, 56, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            style={{
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                            }}
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

                    {/* Glass Skill Tags */}
                    <div className="h-[32px] mb-4 flex flex-wrap gap-1.5 overflow-hidden">
                        {course.tags.slice(0, 3).map((tag) => (
                            <motion.span
                                key={tag}
                                className="px-2 py-1 text-[10px] font-medium text-white/80 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                                whileHover={{
                                    background: 'rgba(199, 24, 56, 1)',
                                    color: '#ffffff',
                                    y: -2,
                                    scale: 1.05,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {tag}
                            </motion.span>
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
                            <div
                                className="scale-75 origin-center"
                                style={{
                                    filter: 'drop-shadow(0 0 8px rgba(199, 24, 56, 0.3))',
                                }}
                            >
                                <CourseProgress progress={course.progress} delay={index * 0.05} />
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Glass CTA Buttons */}
                    <div className="grid grid-cols-2 gap-2 h-[48px] mt-auto">
                        {/* Watch Live Button - Glass with Red Glow */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl overflow-hidden group/btn transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.8) 0%, rgba(161, 14, 38, 0.9) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 0 20px rgba(199, 24, 56, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            {/* Button Glow on Hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"
                                style={{
                                    animation: 'shimmer 2s ease-in-out infinite',
                                }}
                            />

                            <div className="relative flex items-center justify-center gap-1.5">
                                <motion.div
                                    whileHover={{ rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Play className="w-3 h-3" fill="white" />
                                </motion.div>
                                <span>Watch</span>
                            </div>
                        </motion.button>

                        {/* Enroll Button - Transparent Glass */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl transition-all duration-300 group/btn overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            {/* Hover Gradient Fill */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(199, 24, 56, 1) 0%, rgba(161, 14, 38, 1) 100%)',
                                }}
                            />
                            <div className="relative flex items-center justify-center gap-1.5">
                                <span>Enroll</span>
                                <motion.div
                                    whileHover={{ x: 2, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowRight className="w-3 h-3" />
                                </motion.div>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Animated Corner Accents - Glass Style */}
                <div
                    className="absolute top-3 right-3 w-12 h-12 border-t border-r rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none"
                    style={{
                        borderColor: 'rgba(199, 24, 56, 0.5)',
                        boxShadow: '0 0 12px rgba(199, 24, 56, 0.3)',
                    }}
                />
                <div
                    className="absolute bottom-3 left-3 w-12 h-12 border-b border-l rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none"
                    style={{
                        borderColor: 'rgba(199, 24, 56, 0.5)',
                        boxShadow: '0 0 12px rgba(199, 24, 56, 0.3)',
                    }}
                />

                {/* Animated Border Light Sweep */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(199, 24, 56, 0.3) 50%, transparent 100%)',
                        animation: 'borderSweep 3s ease-in-out infinite',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        padding: '1px',
                    }}
                />
            </motion.div>

            {/* Consolidated Styles */}
            <style jsx>{`
                @keyframes spectralSweep {
                    0%, 100% {
                        transform: translateX(-100%) rotate(25deg);
                    }
                    50% {
                        transform: translateX(200%) rotate(25deg);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(10px, -15px); }
                }
                
                @keyframes float-slower {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-15px, 10px); }
                }
                
                @keyframes gradientMove {
                    0%, 100% { transform: translate(-10%, -10%); }
                    50% { transform: translate(10%, 10%); }
                }
                
                @keyframes shimmer {
                    0%, 100% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                }
                
                @keyframes borderSweep {
                    0%, 100% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 12s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
