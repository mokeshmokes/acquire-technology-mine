'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FreeCourseCardProps {
    course: {
        id: string;
        title: string;
        description: string;
        image: string;
        skills: string[];
    };
}

export default function FreeCourseCard({ course }: FreeCourseCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations for mouse movement
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
        stiffness: 300,
        damping: 30,
    });

    // One-time intersection observer animation
    useEffect(() => {
        const currentCard = cardRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.25 }
        );

        if (currentCard) {
            observer.observe(currentCard);
        }

        return () => {
            if (currentCard) {
                observer.unobserve(currentCard);
            }
        };
    }, [hasAnimated]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="group relative h-full min-h-[520px]"
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.8,
                ease: [0.22, 0.61, 0.36, 1],
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            {/* Outer Glow */}
            <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: 'radial-gradient(circle, rgba(199, 24, 56, 0.35) 0%, transparent 70%)',
                }}
            />

            {/* Main Card */}
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden flex flex-col bg-card"
                style={{
                    background: 'rgba(20, 0, 0, 0.30)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255, 60, 80, 0.18)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                }}
                animate={{
                    y: isHovered ? -12 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            >
                {/* FREE Badge */}
                <div className="absolute top-4 right-4 z-30">
                    <motion.div
                        className="px-3 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(199, 24, 56, 0.30)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(199, 24, 56, 0.5)',
                            boxShadow: '0 0 30px rgba(199, 24, 56, 0.6)',
                        }}
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(199, 24, 56, 0.5)',
                                '0 0 35px rgba(199, 24, 56, 0.8)',
                                '0 0 20px rgba(199, 24, 56, 0.5)',
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="flex items-center gap-1.5">
                            <Play className="w-3 h-3 text-white fill-white" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                FREE
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Image Showcase - Top 45% */}
                <div className="relative h-[45%] overflow-hidden">
                    {/* Image with animations */}
                    <motion.div
                        className="relative w-full h-full"
                        initial={{ opacity: 0, scale: 1.25, y: 30, filter: 'blur(12px)' }}
                        animate={
                            hasAnimated
                                ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
                                : {}
                        }
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 0.61, 0.36, 1],
                        }}
                    >
                        {/* Continuous floating animation */}
                        <motion.div
                            className="relative w-full h-full"
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            {/* Image with hover zoom and rotate */}
                            <motion.div
                                className="relative w-full h-full"
                                animate={{
                                    scale: isHovered ? 1.08 : 1,
                                    rotate: isHovered ? 1 : 0,
                                }}
                                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                            >
                                {/* Placeholder gradient background */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(135deg, 
                                            rgba(199, 24, 56, 0.3) 0%, 
                                            rgba(122, 0, 25, 0.4) 50%, 
                                            rgba(161, 14, 38, 0.3) 100%)`,
                                    }}
                                />

                                {/* Actual image - will be replaced with uploaded images */}
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(true)} // Show gradient if image fails
                                />

                                {/* Dark red tint overlay */}
                                <div
                                    className="absolute inset-0 mix-blend-multiply"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, rgba(122, 0, 25, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)',
                                    }}
                                />

                                {/* Soft gradient overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, transparent 0%, rgba(20, 0, 0, 0.6) 100%)',
                                    }}
                                />

                                {/* Hover glow */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            'radial-gradient(circle at center, rgba(199, 24, 56, 0.4) 0%, transparent 70%)',
                                    }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Content Section - Bottom 55% */}
                <div className="relative flex-1 p-6 flex flex-col">
                    {/* Course Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1">
                        {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 mb-6 line-clamp-2 leading-relaxed">
                        {course.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {course.skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.8 + index * 0.1,
                                    ease: [0.22, 0.61, 0.36, 1],
                                }}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 60, 80, 0.15)',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Watch Free Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full py-3.5 rounded-xl overflow-hidden group/btn"
                        style={{
                            background:
                                'linear-gradient(135deg, rgba(199, 24, 56, 0.95) 0%, rgba(161, 14, 38, 1) 100%)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 0 25px rgba(199, 24, 56, 0.5)',
                        }}
                    >
                        {/* Button glow on hover */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
                            }}
                            animate={{
                                scale: isHovered ? [1, 1.5, 1] : 1,
                                opacity: isHovered ? [0.5, 1, 0.5] : 0,
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                            <Play className="w-4 h-4" fill="white" />
                            <span>Watch Free</span>
                            <motion.div
                                animate={{ x: isHovered ? [0, 6, 0] : 0 }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </motion.button>
                </div>

                {/* Border glow on hover */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        border: '1px solid rgba(199, 24, 56, 0.6)',
                        boxShadow: '0 0 30px rgba(199, 24, 56, 0.4)',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
