'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Brain,
    Database,
    Cloud,
    Shield,
    Code2,
    BarChart3,
    Boxes,
    Sparkles,
    MessageSquare,
    TrendingUp,
    Cpu,
    Lock,
} from 'lucide-react';

interface TechCard {
    id: string;
    title: string;
    description: string;
    duration: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    angle: number;
    radius: number;
    depth: number;
    floatDuration: number;
    floatDelay: number;
}

const techCards: TechCard[] = [
    {
        id: 'ai-engineer',
        title: 'AI Engineer Program',
        description: 'Master Gen AI, AI Agents & LLMs',
        duration: '6 Months',
        icon: Brain,
        angle: 0,
        radius: 320,
        depth: -100,
        floatDuration: 6,
        floatDelay: 0,
    },
    {
        id: 'data-science',
        title: 'Data Science',
        description: 'Python, ML & Analytics',
        duration: '5 Months',
        icon: Database,
        angle: 30,
        radius: 300,
        depth: -80,
        floatDuration: 5.5,
        floatDelay: 0.3,
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Deep Learning & Neural Networks',
        duration: '4 Months',
        icon: Cpu,
        angle: 60,
        radius: 340,
        depth: -120,
        floatDuration: 7,
        floatDelay: 0.6,
    },
    {
        id: 'cloud',
        title: 'Cloud Computing',
        description: 'AWS, Azure & DevOps',
        duration: '4 Months',
        icon: Cloud,
        angle: 90,
        radius: 310,
        depth: -90,
        floatDuration: 6.5,
        floatDelay: 0.9,
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        description: 'Ethical Hacking & Pentesting',
        duration: '5 Months',
        icon: Shield,
        angle: 120,
        radius: 330,
        depth: -110,
        floatDuration: 5,
        floatDelay: 1.2,
    },
    {
        id: 'full-stack',
        title: 'Full Stack Development',
        description: 'React, Node.js & MongoDB',
        duration: '6 Months',
        icon: Code2,
        angle: 150,
        radius: 300,
        depth: -85,
        floatDuration: 6.8,
        floatDelay: 1.5,
    },
    {
        id: 'power-bi',
        title: 'Power BI',
        description: 'Business Intelligence & Visualization',
        duration: '3 Months',
        icon: BarChart3,
        angle: 180,
        radius: 320,
        depth: -95,
        floatDuration: 5.3,
        floatDelay: 1.8,
    },
    {
        id: 'devops',
        title: 'DevOps',
        description: 'CI/CD & Infrastructure Automation',
        duration: '4 Months',
        icon: Boxes,
        angle: 210,
        radius: 340,
        depth: -115,
        floatDuration: 6.2,
        floatDelay: 2.1,
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        description: 'Autonomous AI & Agent Systems',
        duration: '3 Months',
        icon: Sparkles,
        angle: 240,
        radius: 305,
        depth: -88,
        floatDuration: 5.8,
        floatDelay: 2.4,
    },
    {
        id: 'prompt-engineering',
        title: 'Prompt Engineering',
        description: 'Advanced AI Prompting Techniques',
        duration: '2 Months',
        icon: MessageSquare,
        angle: 270,
        radius: 325,
        depth: -105,
        floatDuration: 6.5,
        floatDelay: 2.7,
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'SQL, Python & Visualization',
        duration: '4 Months',
        icon: TrendingUp,
        angle: 300,
        radius: 315,
        depth: -92,
        floatDuration: 5.6,
        floatDelay: 3.0,
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        description: 'Web3, Ethereum & Smart Contracts',
        duration: '5 Months',
        icon: Lock,
        angle: 330,
        radius: 335,
        depth: -108,
        floatDuration: 6.9,
        floatDelay: 3.3,
    },
];

export default function FloatingTechCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse following with spring physics
    const springConfig = { damping: 30, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Normalize mouse position (-0.5 to 0.5)
            const x = (e.clientX - centerX) / rect.width;
            const y = (e.clientY - centerY) / rect.height;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Check for reduced motion preference
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center perspective-[2000px]"
            style={{ perspective: '2000px' }}
        >
            {/* 3D Container with Mouse Interaction */}
            <motion.div
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full"
            >
                {/* Center Hub - Technology Core */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Holographic Core */}
                    <div className="relative">
                        {/* Ambient Glow */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        />

                        {/* Central Chip */}
                        <motion.div
                            animate={
                                prefersReducedMotion
                                    ? {}
                                    : {
                                        rotateZ: 360,
                                    }
                            }
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="relative"
                        >
                            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 via-surface to-primary/20 rounded-2xl border-2 border-primary/40 backdrop-blur-xl shadow-2xl flex items-center justify-center">
                                {/* Inner Glow */}
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute inset-2 bg-primary/20 rounded-xl blur-md"
                                />

                                {/* Brain Icon */}
                                <Brain className="w-16 h-16 text-primary relative z-10" strokeWidth={1.5} />

                                {/* Corner Circuits */}
                                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/60 rounded-tl" />
                                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/60 rounded-tr" />
                                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/60 rounded-bl" />
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/60 rounded-br" />
                            </div>
                        </motion.div>

                        {/* Orbiting Rings */}
                        {[1, 2].map((ring) => (
                            <motion.div
                                key={ring}
                                animate={
                                    prefersReducedMotion
                                        ? {}
                                        : {
                                            rotateZ: ring % 2 === 0 ? 360 : -360,
                                        }
                                }
                                transition={{
                                    duration: 15 + ring * 5,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: `${160 + ring * 40}px`,
                                    height: `${160 + ring * 40}px`,
                                }}
                            >
                                <div
                                    className="w-full h-full rounded-full border border-primary/20"
                                    style={{
                                        background: `conic-gradient(from 0deg, transparent 0%, rgba(122, 0, 25, 0.3) 50%, transparent 100%)`,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Floating Course Cards */}
                <div className="absolute inset-0">
                    {techCards.map((card, index) => {
                        const Icon = card.icon;
                        const isHovered = hoveredCard === card.id;

                        // Calculate 3D position
                        const angleRad = (card.angle * Math.PI) / 180;
                        const x = Math.cos(angleRad) * card.radius;
                        const y = Math.sin(angleRad) * card.radius;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 80,
                                    rotateX: 20,
                                    filter: 'blur(20px)',
                                }}
                                animate={
                                    mounted
                                        ? {
                                            opacity: hoveredCard && !isHovered ? 0.3 : 1,
                                            scale: 1,
                                            y: 0,
                                            rotateX: 0,
                                            filter: hoveredCard && !isHovered ? 'blur(4px)' : 'blur(0px)',
                                        }
                                        : {}
                                }
                                transition={{
                                    duration: 1,
                                    delay: index * 0.12,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="absolute left-1/2 top-1/2 hidden lg:block"
                                style={{
                                    transform: `translate(${x}px, ${y}px) translateZ(${card.depth}px)`,
                                    transformStyle: 'preserve-3d',
                                }}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Floating Animation */}
                                <motion.div
                                    animate={
                                        prefersReducedMotion || isHovered
                                            ? {}
                                            : {
                                                y: [-15, 15, -15],
                                                rotateZ: [-5, 5, -5],
                                            }
                                    }
                                    transition={{
                                        duration: card.floatDuration,
                                        delay: card.floatDelay,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {/* Card */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            z: 50,
                                        }}
                                        className="relative group cursor-pointer"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Card Glow */}
                                        <motion.div
                                            animate={{
                                                opacity: isHovered ? 0.8 : 0.3,
                                                scale: isHovered ? 1.2 : 1,
                                            }}
                                            className="absolute -inset-4 bg-primary/40 blur-xl rounded-2xl"
                                        />

                                        {/* Card Content */}
                                        <div className="relative w-48 bg-gradient-to-br from-surface/90 via-surface/80 to-surface/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 shadow-2xl">
                                            {/* Glass Reflection */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                                style={{
                                                    background:
                                                        'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                                }}
                                            />

                                            {/* Icon */}
                                            <div className="mb-3">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                                                {card.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs text-muted mb-2 line-clamp-2">
                                                {card.description}
                                            </p>

                                            {/* Duration */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-primary font-semibold">
                                                    {card.duration}
                                                </span>
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            </div>

                                            {/* Corner Accents */}
                                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Tooltip */}
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-surface/95 backdrop-blur-xl border border-primary/30 rounded-xl p-4 shadow-2xl z-50"
                                            >
                                                <h4 className="text-sm font-bold text-white mb-2">
                                                    {card.title}
                                                </h4>
                                                <p className="text-xs text-muted mb-3">{card.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-primary">
                                                        Duration: {card.duration}
                                                    </span>
                                                    <button className="text-xs text-primary hover:text-primary-hover font-semibold flex items-center gap-1">
                                                        Explore →
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Carousel - Hidden on Desktop */}
                <div className="lg:hidden absolute inset-0 flex items-center justify-center px-6">
                    <div className="w-full max-w-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-center"
                        >
                            <div className="bg-gradient-to-br from-surface/90 via-surface/80 to-surface/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 shadow-2xl">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <Brain className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Premium Tech Courses
                                </h3>
                                <p className="text-sm text-muted mb-4">
                                    Master cutting-edge technologies with industry experts
                                </p>
                                <button className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors">
                                    View All Courses
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(122, 0, 25, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(122, 0, 25, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Radial Gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>
        </div>
    );
}
