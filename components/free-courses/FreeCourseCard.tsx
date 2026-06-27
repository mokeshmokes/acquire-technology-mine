'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface FreeCourseCardProps {
    course: {
        id: string;
        title: string;
        description: string;
        image: string;
        skills: string[];
    };
    index?: number;
}

export default function FreeCourseCard({ course, index = 0 }: FreeCourseCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // 3D tilt — motion values never cause React re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Lower stiffness = smoother, less CPU chasing
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
        stiffness: 150,
        damping: 20,
    });

    // One-shot reveal
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            ref={cardRef}
            className="group relative h-full min-h-[480px] md:min-h-[500px] lg:min-h-[520px]"
            initial={{ opacity: 0, y: 50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px', willChange: 'transform, opacity' }}
        >
            {/* Outer glow — CSS hover, zero JS */}
            <div
                className="absolute -inset-3 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, rgba(199,24,56,0.3) 0%, transparent 70%)',
                }}
            />

            {/* Main Card
             *  KEY CHANGE: removed backdropFilter entirely.
             * backdrop-filter on 8 cards = 8 full-section blur recomposites
             * per scroll frame. Replaced with a solid semi-transparent bg
             * that looks identical at a fraction of the GPU cost.
             */}
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                    background: 'rgba(18, 2, 6, 0.88)',
                    border: '1px solid rgba(255,60,80,0.18)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                    willChange: 'transform',
                }}
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            >
                {/* FREE Badge */}
                <div className="absolute top-4 right-4 z-30">
                    <div
                        className="px-3 py-1.5 rounded-full animate-badge-pulse"
                        style={{
                            background: 'rgba(199,24,56,0.30)',
                            border: '1px solid rgba(199,24,56,0.5)',
                        }}
                    >
                        <div className="flex items-center gap-1.5">
                            <Play className="w-3 h-3 text-white fill-white" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                FREE
                            </span>
                        </div>
                    </div>
                </div>

                {/* Image — top 45% */}
                <div className="relative h-[45%] overflow-hidden">
                    <motion.div
                        className="relative w-full h-full"
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            duration: 0.9,
                            delay: index * 0.08 + 0.1,
                            ease: [0.22, 0.61, 0.36, 1],
                        }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {/* Float via CSS — off JS thread */}
                        <div className="relative w-full h-full animate-float-image" style={{ willChange: 'transform' }}>
                            <motion.div
                                className="relative w-full h-full"
                                animate={{
                                    scale: isHovered ? 1.07 : 1,
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                                style={{ willChange: 'transform' }}
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(199,24,56,0.3) 0%, rgba(122,0,25,0.4) 50%, rgba(161,14,38,0.3) 100%)',
                                    }}
                                />
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(true)}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, transparent 0%, rgba(18,2,6,0.7) 100%)',
                                    }}
                                />
                                {/* Hover glow — CSS transition */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-400 ${isHovered ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    style={{
                                        background:
                                            'radial-gradient(circle at center, rgba(199,24,56,0.35) 0%, transparent 70%)',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex-1 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1">
                        {course.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-6 line-clamp-2 leading-relaxed">
                        {course.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {course.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.08 + 0.5 + i * 0.06,
                                    ease: [0.22, 0.61, 0.36, 1],
                                }}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,60,80,0.15)',
                                    color: 'rgba(255,255,255,0.8)',
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex-1" />

                    {/* Watch Free Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full py-3.5 rounded-xl overflow-hidden"
                        style={{
                            background:
                                'linear-gradient(135deg, rgba(199,24,56,0.95) 0%, rgba(161,14,38,1) 100%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 25px rgba(199,24,56,0.45)',
                            willChange: 'transform',
                        }}
                    >
                        <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                            <Play className="w-4 h-4" fill="white" />
                            <span>Watch Free</span>
                            <div className={isHovered ? 'animate-arrow-bounce' : ''}>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.button>
                </div>

                {/* Border glow — CSS hover */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        border: '1px solid rgba(199,24,56,0.55)',
                        boxShadow: 'inset 0 0 30px rgba(199,24,56,0.08)',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
