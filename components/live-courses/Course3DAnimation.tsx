'use client';

import {
    Brain,
    Database,
    Code2,
    Cpu,
    Shield,
    Cloud,
    Box,
    BarChart3,
    Lock,
    Server,
    Layers,
    Terminal,
} from 'lucide-react';

interface Course3DAnimationProps {
    courseId: string;
}

// Each course just shows a primary icon + up to 3 smaller accent icons
// All animation is done via lightweight CSS — no framer-motion loops
const courseConfig: Record<string, { primary: React.ElementType; accents: React.ElementType[] }> = {
    'ai-engineer-program': { primary: Brain, accents: [Cpu, Cpu] },
    'data-science': { primary: Database, accents: [BarChart3, BarChart3] },
    'cloud-computing': { primary: Cloud, accents: [Server, Server] },
    'cyber-security': { primary: Shield, accents: [Lock, Lock] },
    'full-stack-development': { primary: Code2, accents: [Layers, Terminal] },
    'blockchain': { primary: Box, accents: [Lock, Lock] },
    'ui-ux-design': { primary: Layers, accents: [Box, Box] },
    'digital-marketing': { primary: BarChart3, accents: [BarChart3, BarChart3] },
};

const fallback = { primary: Brain, accents: [Cpu, Cpu] };

export default function Course3DAnimation({ courseId }: Course3DAnimationProps) {
    const config = courseConfig[courseId] ?? fallback;
    const PrimaryIcon = config.primary;

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-3xl">
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(122, 0, 25, 0.3) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(122, 0, 25, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Ambient glow — pure CSS, no JS */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl pointer-events-none" />

            {/* Primary icon — float via CSS animation */}
            <div className="relative flex items-center justify-center w-16 h-16 course-icon-float">
                <div
                    className="absolute inset-0 rounded-xl blur-xl"
                    style={{ backgroundColor: 'rgba(194, 24, 56, 0.25)' }}
                />
                <div
                    className="relative w-full h-full rounded-xl flex items-center justify-center backdrop-blur-sm border"
                    style={{
                        backgroundColor: 'rgba(194, 24, 56, 0.12)',
                        borderColor: 'rgba(194, 24, 56, 0.35)',
                    }}
                >
                    <PrimaryIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
            </div>

            {/* Accent icons */}
            {config.accents.map((AccentIcon, i) => {
                const positions = [
                    { left: '15%', top: '20%' },
                    { right: '15%', bottom: '20%' },
                ];
                const pos = positions[i] ?? positions[0];

                return (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center w-8 h-8 course-icon-float-sm"
                        style={{ ...pos, animationDelay: `${i * 0.7}s` }}
                    >
                        <div
                            className="w-full h-full rounded-lg flex items-center justify-center border"
                            style={{
                                backgroundColor: 'rgba(194, 24, 56, 0.08)',
                                borderColor: 'rgba(194, 24, 56, 0.2)',
                            }}
                        >
                            <AccentIcon className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
                        </div>
                    </div>
                );
            })}

            <style jsx>{`
                @keyframes iconFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .course-icon-float {
                    animation: iconFloat 4s ease-in-out infinite;
                }
                .course-icon-float-sm {
                    animation: iconFloat 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
