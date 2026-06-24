'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Brain,
    Database,
    Code2,
    Cpu,
    Shield,
    Cloud,
    Layers,
    Box,
    Terminal,
    BarChart3,
    Lock,
    Server,
} from 'lucide-react';

interface Course3DAnimationProps {
    courseId: string;
}

const courseAnimations = {
    'ai-engineer-program': {
        title: 'AI Brain',
        layers: [
            { icon: Brain, size: 64, depth: 0, float: 12, duration: 5, color: '#C21838' },
            { icon: Cpu, size: 32, depth: -40, float: 10, duration: 6, color: '#7A0019', position: { x: -60, y: -40 } },
            { icon: Cpu, size: 24, depth: -60, float: 8, duration: 7, color: '#A10E26', position: { x: 60, y: 30 } },
            { icon: Brain, size: 20, depth: -80, float: 15, duration: 8, color: '#7A0019', position: { x: -50, y: 50 } },
        ],
    },
    'data-science': {
        title: 'Data Analytics',
        layers: [
            { icon: Database, size: 64, depth: 0, float: 12, duration: 5.5, color: '#C21838' },
            { icon: BarChart3, size: 36, depth: -50, float: 10, duration: 6.5, color: '#7A0019', position: { x: -55, y: -35 } },
            { icon: BarChart3, size: 28, depth: -70, float: 12, duration: 7.5, color: '#A10E26', position: { x: 55, y: 25 } },
            { icon: Database, size: 22, depth: -90, float: 14, duration: 8.5, color: '#7A0019', position: { x: 45, y: -45 } },
        ],
    },
    'cloud-computing': {
        title: 'Cloud Infrastructure',
        layers: [
            { icon: Cloud, size: 64, depth: 0, float: 12, duration: 6, color: '#C21838' },
            { icon: Server, size: 32, depth: -45, float: 10, duration: 7, color: '#7A0019', position: { x: -60, y: -30 } },
            { icon: Server, size: 28, depth: -65, float: 11, duration: 8, color: '#A10E26', position: { x: 50, y: 40 } },
            { icon: Cloud, size: 24, depth: -85, float: 13, duration: 9, color: '#7A0019', position: { x: -45, y: 45 } },
        ],
    },
    'cyber-security': {
        title: 'Digital Security',
        layers: [
            { icon: Shield, size: 64, depth: 0, float: 12, duration: 5.8, color: '#C21838' },
            { icon: Lock, size: 32, depth: -50, float: 10, duration: 6.8, color: '#7A0019', position: { x: -58, y: -38 } },
            { icon: Shield, size: 26, depth: -70, float: 12, duration: 7.8, color: '#A10E26', position: { x: 58, y: 28 } },
            { icon: Lock, size: 22, depth: -90, float: 14, duration: 8.8, color: '#7A0019', position: { x: -48, y: 48 } },
        ],
    },
    'full-stack-development': {
        title: 'Full Stack',
        layers: [
            { icon: Code2, size: 64, depth: 0, float: 12, duration: 6.2, color: '#C21838' },
            { icon: Layers, size: 36, depth: -48, float: 10, duration: 7.2, color: '#7A0019', position: { x: -62, y: -32 } },
            { icon: Terminal, size: 30, depth: -68, float: 11, duration: 8.2, color: '#A10E26', position: { x: 52, y: 35 } },
            { icon: Code2, size: 24, depth: -88, float: 13, duration: 9.2, color: '#7A0019', position: { x: 48, y: -48 } },
        ],
    },
    'blockchain': {
        title: 'Blockchain',
        layers: [
            { icon: Box, size: 64, depth: 0, float: 12, duration: 6.5, color: '#C21838' },
            { icon: Lock, size: 32, depth: -52, float: 10, duration: 7.5, color: '#7A0019', position: { x: -56, y: -36 } },
            { icon: Box, size: 28, depth: -72, float: 11, duration: 8.5, color: '#A10E26', position: { x: 56, y: 32 } },
            { icon: Lock, size: 22, depth: -92, float: 13, duration: 9.5, color: '#7A0019', position: { x: -46, y: 46 } },
        ],
    },
    'ui-ux-design': {
        title: 'UI/UX Design',
        layers: [
            { icon: Layers, size: 64, depth: 0, float: 12, duration: 5.6, color: '#C21838' },
            { icon: Box, size: 34, depth: -46, float: 10, duration: 6.6, color: '#7A0019', position: { x: -54, y: -34 } },
            { icon: Layers, size: 26, depth: -66, float: 12, duration: 7.6, color: '#A10E26', position: { x: 54, y: 26 } },
            { icon: Box, size: 20, depth: -86, float: 14, duration: 8.6, color: '#7A0019', position: { x: -44, y: 44 } },
        ],
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        layers: [
            { icon: BarChart3, size: 64, depth: 0, float: 12, duration: 6.8, color: '#C21838' },
            { icon: BarChart3, size: 32, depth: -54, float: 10, duration: 7.8, color: '#7A0019', position: { x: -64, y: -40 } },
            { icon: BarChart3, size: 28, depth: -74, float: 11, duration: 8.8, color: '#A10E26', position: { x: 60, y: 36 } },
            { icon: BarChart3, size: 24, depth: -94, float: 13, duration: 9.8, color: '#7A0019', position: { x: 50, y: -50 } },
        ],
    },
};

export default function Course3DAnimation({ courseId }: Course3DAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Mouse position tracking
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth spring physics
    const springConfig = { damping: 25, stiffness: 120 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !mounted) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    // Get animation config for this course
    const animationConfig = courseAnimations[courseId as keyof typeof courseAnimations] || courseAnimations['ai-engineer-program'];

    // Check for reduced motion
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Don't render 3D content until mounted (client-side only)
    if (!mounted) {
        return (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-primary/10 animate-pulse" />
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-3xl"
            style={{ perspective: '1000px' }}
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(122, 0, 25, 0.3) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(122, 0, 25, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Ambient Glow */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.4 : 0.2,
                    scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-primary/20 blur-3xl"
            />

            {/* 3D Container */}
            <motion.div
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: 'preserve-3d',
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Floating Layers */}
                {animationConfig.layers.map((layer, index) => {
                    const Icon = layer.icon;
                    const position = layer.position || { x: 0, y: 0 };

                    return (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                y: 60,
                                filter: 'blur(20px)',
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                filter: 'blur(0px)',
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                            className="absolute"
                            style={{
                                left: `calc(50% + ${position.x}px)`,
                                top: `calc(50% + ${position.y}px)`,
                                transform: `translateZ(${layer.depth}px)`,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Floating Animation */}
                            <motion.div
                                animate={
                                    prefersReducedMotion
                                        ? {}
                                        : {
                                            y: [-layer.float, layer.float, -layer.float],
                                            rotateZ: [-5, 5, -5],
                                        }
                                }
                                transition={{
                                    duration: layer.duration,
                                    delay: index * 0.3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {/* Glow Effect */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: index * 0.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute inset-0 blur-2xl"
                                    style={{
                                        backgroundColor: layer.color,
                                        opacity: 0.3,
                                    }}
                                />

                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="relative"
                                    style={{
                                        width: layer.size,
                                        height: layer.size,
                                    }}
                                >
                                    {/* Background */}
                                    <div
                                        className="absolute inset-0 rounded-xl backdrop-blur-sm border"
                                        style={{
                                            backgroundColor: `${layer.color}15`,
                                            borderColor: `${layer.color}40`,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Icon
                                            style={{
                                                width: layer.size * 0.6,
                                                height: layer.size * 0.6,
                                                color: layer.color,
                                            }}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Corner Accents (Main Layer Only) */}
                                    {index === 0 && (
                                        <>
                                            <div
                                                className="absolute top-1 left-1 w-2 h-2 border-l border-t rounded-tl"
                                                style={{ borderColor: layer.color }}
                                            />
                                            <div
                                                className="absolute top-1 right-1 w-2 h-2 border-r border-t rounded-tr"
                                                style={{ borderColor: layer.color }}
                                            />
                                            <div
                                                className="absolute bottom-1 left-1 w-2 h-2 border-l border-b rounded-bl"
                                                style={{ borderColor: layer.color }}
                                            />
                                            <div
                                                className="absolute bottom-1 right-1 w-2 h-2 border-r border-b rounded-br"
                                                style={{ borderColor: layer.color }}
                                            />
                                        </>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}

                {/* Connection Lines */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                    style={{ mixBlendMode: 'screen' }}
                >
                    <motion.line
                        x1="50%"
                        y1="50%"
                        x2="30%"
                        y2="30%"
                        stroke="#C21838"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.line
                        x1="50%"
                        y1="50%"
                        x2="70%"
                        y2="60%"
                        stroke="#7A0019"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.line
                        x1="50%"
                        y1="50%"
                        x2="70%"
                        y2="60%"
                        stroke="#7A0019"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                    />
                </svg>

                {/* Particles - Fixed positions to avoid hydration mismatch */}
                {[
                    { left: 25, top: 30 },
                    { left: 75, top: 25 },
                    { left: 35, top: 70 },
                    { left: 65, top: 75 },
                    { left: 45, top: 20 },
                    { left: 55, top: 80 },
                    { left: 20, top: 50 },
                    { left: 80, top: 55 },
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                        }}
                        animate={
                            prefersReducedMotion
                                ? {}
                                : {
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }
                        }
                        transition={{
                            duration: 2.5 + (i * 0.3),
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </motion.div>

            {/* Hover Indicator */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 border-2 border-primary/40 rounded-t-3xl pointer-events-none"
                />
            )}
        </div>
    );
}
