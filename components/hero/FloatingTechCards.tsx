'use client';

import { useState, useEffect, useRef } from 'react';
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
    floatDelay: number;
}

const techCards: TechCard[] = [
    { id: 'ai-engineer', title: 'AI Engineer', description: 'Master Gen AI & LLMs', duration: '6 Months', icon: Brain, angle: 0, radius: 320, floatDelay: 0 },
    { id: 'data-science', title: 'Data Science', description: 'Python, ML & Analytics', duration: '5 Months', icon: Database, angle: 30, radius: 300, floatDelay: 0.4 },
    { id: 'machine-learning', title: 'Machine Learning', description: 'Deep Learning & Neural Networks', duration: '4 Months', icon: Cpu, angle: 60, radius: 340, floatDelay: 0.8 },
    { id: 'cloud', title: 'Cloud Computing', description: 'AWS, Azure & DevOps', duration: '4 Months', icon: Cloud, angle: 90, radius: 310, floatDelay: 1.2 },
    { id: 'cyber-security', title: 'Cyber Security', description: 'Ethical Hacking & Pentesting', duration: '5 Months', icon: Shield, angle: 120, radius: 330, floatDelay: 1.6 },
    { id: 'full-stack', title: 'Full Stack Dev', description: 'React, Node.js & MongoDB', duration: '6 Months', icon: Code2, angle: 150, radius: 300, floatDelay: 2.0 },
    { id: 'power-bi', title: 'Power BI', description: 'BI & Visualization', duration: '3 Months', icon: BarChart3, angle: 180, radius: 320, floatDelay: 2.4 },
    { id: 'devops', title: 'DevOps', description: 'CI/CD & Automation', duration: '4 Months', icon: Boxes, angle: 210, radius: 340, floatDelay: 2.8 },
    { id: 'ai-agents', title: 'AI Agents', description: 'Autonomous AI Systems', duration: '3 Months', icon: Sparkles, angle: 240, radius: 305, floatDelay: 3.2 },
    { id: 'prompt-eng', title: 'Prompt Engineering', description: 'Advanced AI Prompting', duration: '2 Months', icon: MessageSquare, angle: 270, radius: 325, floatDelay: 3.6 },
    { id: 'data-analytics', title: 'Data Analytics', description: 'SQL, Python & Viz', duration: '4 Months', icon: TrendingUp, angle: 300, radius: 315, floatDelay: 4.0 },
    { id: 'blockchain', title: 'Blockchain', description: 'Web3 & Smart Contracts', duration: '5 Months', icon: Lock, angle: 330, radius: 335, floatDelay: 4.4 },
];

export default function FloatingTechCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    // Single shared mouse tracking — motion values only, no React state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 35, stiffness: 120 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        let pendingX = 0;
        let pendingY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            pendingX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            pendingY = (e.clientY - rect.top - rect.height / 2) / rect.height;

            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(() => {
                    mouseX.set(pendingX);
                    mouseY.set(pendingY);
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [mounted, mouseX, mouseY]);

    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: '2000px' }}
        >
            {/* 3D Container — single motion element handles all tilt */}
            <motion.div
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full"
            >
                {/* Center Hub */}
                {mounted && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full w-48 h-48 -translate-x-1/4 -translate-y-1/4" />
                            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 via-surface to-primary/20 rounded-2xl border-2 border-primary/40 backdrop-blur-xl shadow-2xl flex items-center justify-center">
                                <Brain className="w-12 h-12 text-primary" strokeWidth={1.5} />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Floating Cards — CSS float animation, no per-card framer loops */}
                <div className="absolute inset-0 hidden lg:block">
                    {techCards.map((card, index) => {
                        const Icon = card.icon;
                        const angleRad = (card.angle * Math.PI) / 180;
                        const x = Math.cos(angleRad) * card.radius;
                        const y = Math.sin(angleRad) * card.radius;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute left-1/2 top-1/2 tech-card-float"
                                style={{
                                    marginLeft: `${x - 96}px`,
                                    marginTop: `${y - 60}px`,
                                    animationDelay: `${card.floatDelay}s`,
                                    width: '192px',
                                }}
                            >
                                <div className="group relative w-48 bg-gradient-to-br from-surface/90 via-surface/80 to-surface/90 backdrop-blur-lg border border-primary/20 rounded-2xl p-4 shadow-xl cursor-pointer hover:border-primary/50 transition-colors duration-300">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-muted mb-2 line-clamp-1">
                                        {card.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-primary font-semibold">
                                            {card.duration}
                                        </span>
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile fallback */}
                <div className="lg:hidden absolute inset-0 flex items-center justify-center px-6">
                    <div className="bg-gradient-to-br from-surface/90 via-surface/80 to-surface/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 shadow-2xl text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Brain className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Premium Tech Courses</h3>
                        <p className="text-sm text-muted mb-4">Master cutting-edge technologies with industry experts</p>
                        <button className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors">
                            View All Courses
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `linear-gradient(rgba(122, 0, 25, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(122, 0, 25, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <style jsx>{`
                @keyframes techCardFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .tech-card-float {
                    animation: techCardFloat 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
