'use client';

import { motion } from 'framer-motion';
import {
    Brain,
    Network,
    Database,
    Cloud,
    Shield,
    Lock,
    Target,
    Infinity,
    BarChart3,
    Code2,
    FileCode,
    Container,
    Globe,
    Server,
    Boxes,
    Settings,
    Zap,
    GitBranch,
    Layers,
} from 'lucide-react';

interface TechnologiesGridProps {
    skills: string[];
}

// Map technology names to their specific icons
const getTechnologyIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();

    // AI/ML Technologies
    if (skillLower.includes('python')) return '🐍';
    if (skillLower.includes('tensorflow')) return '🧠';
    if (skillLower.includes('pytorch')) return '🔥';
    if (skillLower.includes('langchain')) return '🔗';
    if (skillLower.includes('openai') || skillLower.includes('gpt')) return '🤖';
    if (skillLower.includes('llm') || skillLower.includes('ai')) return Brain;
    if (skillLower.includes('rag')) return Layers;
    if (skillLower.includes('vector')) return Database;
    if (skillLower.includes('neural') || skillLower.includes('machine learning')) return Network;

    // Web Development
    if (skillLower.includes('react')) return '⚛️';
    if (skillLower.includes('next')) return '▲';
    if (skillLower.includes('node')) return '🟢';
    if (skillLower.includes('javascript') || skillLower.includes('js')) return '📜';
    if (skillLower.includes('typescript') || skillLower.includes('ts')) return '💙';
    if (skillLower.includes('html')) return '🌐';
    if (skillLower.includes('css')) return '🎨';
    if (skillLower.includes('tailwind')) return '🌊';
    if (skillLower.includes('express')) return FileCode;
    if (skillLower.includes('fastapi')) return Zap;

    // Data Science
    if (skillLower.includes('sql') || skillLower.includes('mysql') || skillLower.includes('postgres')) return Database;
    if (skillLower.includes('mongodb') || skillLower.includes('nosql')) return '🍃';
    if (skillLower.includes('power bi') || skillLower.includes('powerbi')) return '📊';
    if (skillLower.includes('tableau')) return BarChart3;
    if (skillLower.includes('excel')) return '📈';
    if (skillLower.includes('pandas') || skillLower.includes('numpy')) return '🐼';

    // Cloud & DevOps
    if (skillLower.includes('aws') || skillLower.includes('amazon')) return '☁️';
    if (skillLower.includes('azure')) return '☁️';
    if (skillLower.includes('gcp') || skillLower.includes('google cloud')) return '☁️';
    if (skillLower.includes('docker')) return Container;
    if (skillLower.includes('kubernetes') || skillLower.includes('k8s')) return Boxes;
    if (skillLower.includes('devops')) return Infinity;
    if (skillLower.includes('jenkins') || skillLower.includes('ci/cd')) return GitBranch;
    if (skillLower.includes('terraform')) return Settings;
    if (skillLower.includes('cloud')) return Cloud;

    // Cyber Security
    if (skillLower.includes('security') || skillLower.includes('cyber')) return Shield;
    if (skillLower.includes('hacking') || skillLower.includes('ethical')) return '🔓';
    if (skillLower.includes('penetration') || skillLower.includes('pentest')) return Target;
    if (skillLower.includes('firewall')) return Lock;
    if (skillLower.includes('encryption')) return Lock;

    // Programming Languages
    if (skillLower.includes('java') && !skillLower.includes('javascript')) return '☕';
    if (skillLower.includes('c++') || skillLower.includes('cpp')) return '⚙️';
    if (skillLower.includes('c#') || skillLower.includes('csharp')) return '💎';
    if (skillLower.includes('php')) return '🐘';
    if (skillLower.includes('ruby')) return '💎';
    if (skillLower.includes('go') || skillLower.includes('golang')) return '🐹';
    if (skillLower.includes('rust')) return '🦀';

    // Digital Marketing
    if (skillLower.includes('seo')) return '🔍';
    if (skillLower.includes('social media')) return '📱';
    if (skillLower.includes('marketing')) return '📢';
    if (skillLower.includes('analytics')) return BarChart3;
    if (skillLower.includes('ads') || skillLower.includes('ppc')) return '💰';

    // General
    if (skillLower.includes('api')) return Globe;
    if (skillLower.includes('rest')) return Server;
    if (skillLower.includes('graphql')) return Network;
    if (skillLower.includes('git')) return GitBranch;

    // Default
    return Code2;
};

export default function TechnologiesGrid({ skills }: TechnologiesGridProps) {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-20 left-20 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199,24,56,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(161,14,38,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="font-bold text-white mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        Technologies You&apos;ll{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            Master
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Build expertise in cutting-edge technologies and tools used by top companies
                    </p>
                </motion.div>

                {/* Simple Clean Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {skills.map((skill, index) => {
                        const IconComponent = getTechnologyIcon(skill);
                        const isEmoji = typeof IconComponent === 'string';

                        return (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className="group relative rounded-lg md:rounded-xl p-4 md:p-5 text-center"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-2 md:mb-3">
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center"
                                        style={{
                                            background: 'rgba(199, 24, 56, 0.12)',
                                            border: '1px solid rgba(199, 24, 56, 0.25)',
                                        }}
                                    >
                                        {isEmoji ? (
                                            <span className="text-xl md:text-2xl">{IconComponent}</span>
                                        ) : (
                                            <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                        )}
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <p className="text-xs md:text-sm font-semibold text-white leading-tight">
                                    {skill}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
