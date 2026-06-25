'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Clock, Users, ArrowRight, Play } from 'lucide-react';
import CourseProgress from './CourseProgress';
import Course3DAnimation from './Course3DAnimation';
import { useRef, useCallback } from 'react';

interface LiveCourseCardProps {
    course: {
        id: string;
        title: string;
        subtitle: string;
        tags: string[];
        mentor: string;
        session: { day: string; time: string };
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

    /*
     * KEY FIX: use motion values + springs for the 3D tilt instead of
     * useState({ x, y }). useState fires a React re-render on every
     * mousemove (60 fps), re-rendering the full card subtree including
     * Course3DAnimation. Motion values update purely on the Framer
     * compositor thread — zero React renders during mouse move.
     */
    const mouseX = useMotionValue(50); // 0-100 range
    const mouseY = useMotionValue(50);

    const rotateY = useSpring(
        useTransform(mouseX, [0, 100], [-8, 8]),
        { stiffness: 150, damping: 20 }
    );
    const rotateX = useSpring(
        useTransform(mouseY, [0, 100], [6, -6]),
        { stiffness: 150, damping: 20 }
    );
    const liftY = useSpring(0, { stiffness: 200, damping: 25 });
    const cardScale = useSpring(1, { stiffness: 200, damping: 25 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    }, [mouseX, mouseY]);

    const handleMouseEnter = useCallback(() => {
        liftY.set(-8);
        cardScale.set(1.015);
    }, [liftY, cardScale]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(50);
        mouseY.set(50);
        liftY.set(0);
        cardScale.set(1);
    }, [mouseX, mouseY, liftY, cardScale]);

    /*
     * Cursor-light position: derive CSS custom properties from motion values
     * so the radial gradient updates without React re-renders.
     * We read them directly in the style string via a ref instead.
     */
    const lightRef = useRef<HTMLDivElement>(null);
    const handleLightMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!lightRef.current || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        lightRef.current.style.background = `radial-gradient(circle 200px at ${x}% ${y}%, rgba(199, 24, 56, 0.15) 0%, transparent 70%)`;
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative h-full min-h-[620px]"
            onMouseMove={(e) => { handleMouseMove(e); handleLightMove(e); }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            {/* Ambient Outer Glow — CSS opacity transition, no JS */}
            <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(199,24,56,0.3) 0%, rgba(122,0,25,0.18) 40%, transparent 70%)',
                }}
            />

            {/* Card — motion values only, no React state */}
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                    background: 'rgba(18, 10, 14, 0.92)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(180,0,40,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                    y: liftY,
                    scale: cardScale,
                    willChange: 'transform',
                }}
            >
                {/* Border Glow on Hover — CSS only */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        border: '1px solid rgba(255,255,255,0.13)',
                        boxShadow: '0 0 20px rgba(199,24,56,0.25)',
                    }}
                />

                {/* Specular Sweep — CSS animation, only composites when visible */}
                <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden"
                >
                    <div className="absolute inset-0 animate-spectral-sweep"
                        style={{
                            background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Cursor radial light — updated via DOM ref, no re-renders */}
                <div
                    ref={lightRef}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[5]"
                />

                {/* Background particles — CSS only, lightweight */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
                    <div className="absolute w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float-slow" style={{ top: '10%', left: '20%' }} />
                    <div className="absolute w-20 h-20 bg-primary/8 rounded-full blur-xl animate-float-slower" style={{ top: '60%', right: '15%' }} />
                </div>

                {/* Holographic Top Panel */}
                <div
                    className="absolute top-0 left-0 right-0 h-48 z-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(122,0,25,0.22) 0%, rgba(199,24,56,0.15) 50%, rgba(161,14,38,0.10) 100%)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                >
                    <div className="absolute inset-0 opacity-30 animate-gradient-move"
                        style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(199,24,56,0.1) 50%, transparent 70%)' }}
                    />
                </div>

                {/* Live Badge */}
                <div className="relative p-4 z-20 flex-shrink-0">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(199,24,56,0.22)',
                            border: '1px solid rgba(199,24,56,0.35)',
                            boxShadow: '0 0 16px rgba(199,24,56,0.35)',
                        }}
                    >
                        {/* Pulse dot — CSS animation, single element */}
                        <div className="w-2 h-2 bg-white rounded-full animate-dot-pulse"
                            style={{ boxShadow: '0 0 6px rgba(255,255,255,0.8)' }}
                        />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Live Now</span>
                    </div>
                </div>

                {/* 3D Animation */}
                <div className="relative h-[140px] z-20 flex-shrink-0">
                    <Course3DAnimation courseId={course.id} />
                </div>

                {/* Content */}
                <div className="relative p-6 pt-4 flex flex-col flex-1 z-20">
                    <div className="h-[60px] mb-4 flex flex-col justify-start">
                        <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">{course.title}</h3>
                        {course.subtitle && <p className="text-xs text-primary line-clamp-1">{course.subtitle}</p>}
                    </div>

                    {/* Tags — simple hover via Tailwind, no Framer per-tag */}
                    <div className="h-[32px] mb-4 flex flex-wrap gap-1.5 overflow-hidden">
                        {course.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-[10px] font-medium text-white/80 rounded-full whitespace-nowrap cursor-pointer
                                           hover:bg-primary hover:text-white transition-colors duration-200"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Info */}
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
                            <div className="scale-75 origin-center"
                                style={{ filter: 'drop-shadow(0 0 6px rgba(199,24,56,0.25))' }}>
                                <CourseProgress progress={course.progress} delay={index * 0.05} />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1" />

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2 h-[48px] mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl overflow-hidden group/btn"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 0 16px rgba(199,24,56,0.35)',
                                willChange: 'transform',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent
                                            -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                            <div className="relative flex items-center justify-center gap-1.5">
                                <Play className="w-3 h-3" fill="white" />
                                <span>Watch</span>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative px-3 py-2.5 text-white text-xs font-semibold rounded-xl overflow-hidden group/btn"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.09)',
                                willChange: 'transform',
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, rgba(199,24,56,1) 0%, rgba(161,14,38,1) 100%)' }}
                            />
                            <div className="relative flex items-center justify-center gap-1.5">
                                <span>Enroll</span>
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Corner Accents — CSS only */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t border-r rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none"
                    style={{ borderColor: 'rgba(199,24,56,0.45)' }} />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none"
                    style={{ borderColor: 'rgba(199,24,56,0.45)' }} />

                {/* Border sweep — only animates when visible */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <div className="absolute inset-0 animate-border-sweep"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(199,24,56,0.25) 50%, transparent 100%)',
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
