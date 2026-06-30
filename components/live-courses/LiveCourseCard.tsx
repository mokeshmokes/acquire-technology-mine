'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Clock, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
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

export default function LiveCourseCard({ course }: LiveCourseCardProps) {
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



    return (
        <div
            ref={cardRef}
            className="group relative h-full min-h-[420px] md:min-h-[460px] lg:min-h-[480px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >


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
                <div className="relative p-3 md:p-4 z-20 flex-shrink-0">
                    <div
                        className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full"
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
                        <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Live Now</span>
                    </div>
                </div>

                {/* 3D Animation */}
                <div className="relative h-[140px] z-20 flex-shrink-0">
                    <Course3DAnimation courseId={course.id} />
                </div>

                {/* Content */}
                <div className="relative p-4 md:p-6 pt-3 md:pt-4 flex flex-col flex-1 z-20">
                    <div className="h-[55px] md:h-[60px] mb-3 md:mb-4 flex flex-col justify-start">
                        <h3 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">{course.title}</h3>
                        {course.subtitle && <p className="text-[10px] md:text-xs text-primary line-clamp-1">{course.subtitle}</p>}
                    </div>

                    {/* Tags - Uniform height and spacing */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 text-[10px] md:text-xs font-medium text-white/80 rounded-lg whitespace-nowrap cursor-pointer
                                           hover:bg-primary hover:text-white transition-colors duration-200"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs mb-4">
                        <div>
                            <div className="text-white/50 mb-1 text-[10px] md:text-xs">Mentor</div>
                            <div className="font-semibold text-white truncate text-xs md:text-sm">{course.mentor}</div>
                        </div>
                        <div>
                            <div className="text-white/50 mb-1 text-[10px] md:text-xs">Next Session</div>
                            <div className="flex items-center gap-1 font-semibold text-white">
                                <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="truncate text-xs md:text-sm">{course.session.day}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1" />

                    {/* Buttons - Full width on mobile, grid on desktop */}
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-2 mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative w-full px-3 py-2.5 md:py-2.5 text-white text-xs md:text-xs font-semibold rounded-xl overflow-hidden group/btn"
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

                        <Link href="/#contact" className="w-full">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="relative w-full px-3 py-2.5 md:py-2.5 text-white text-xs md:text-xs font-semibold rounded-xl overflow-hidden group/btn"
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
                        </Link>
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
