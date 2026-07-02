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
    Infinity as InfinityIcon,
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
    Atom,
    Terminal,
    Cpu,
    Braces,
    TableProperties,
    TrendingUp,
    PieChart,
    Binary,
    ShieldAlert,
    Coffee,
    Wrench,
    Search,
    Megaphone,
    DollarSign,
    Share2,
} from 'lucide-react';

interface TechnologiesGridProps {
    skills: string[];
}

// Map technology names to their specific Lucide vector icons
const getTechnologyIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();

    // AI/ML Technologies
    if (skillLower.includes('python')) return Terminal;
    if (skillLower.includes('tensorflow')) return Brain;
    if (skillLower.includes('pytorch')) return Cpu;
    if (skillLower.includes('langchain')) return Network;
    if (skillLower.includes('openai') || skillLower.includes('gpt')) return Brain;
    if (skillLower.includes('llm') || skillLower.includes('ai')) return Brain;
    if (skillLower.includes('rag')) return Layers;
    if (skillLower.includes('vector')) return Database;
    if (skillLower.includes('neural') || skillLower.includes('machine learning')) return Network;
    if (skillLower.includes('deep learning')) return Cpu;
    if (skillLower.includes('scikit-learn') || skillLower.includes('scikit')) return Binary;

    // Web Development
    if (skillLower.includes('react')) return Atom;
    if (skillLower.includes('next')) return Layers;
    if (skillLower.includes('node')) return Server;
    if (skillLower.includes('javascript') || skillLower.includes('js')) return Braces;
    if (skillLower.includes('typescript') || skillLower.includes('ts')) return Code2;
    if (skillLower.includes('html')) return Globe;
    if (skillLower.includes('css')) return Layers;
    if (skillLower.includes('tailwind')) return Layers;
    if (skillLower.includes('express')) return FileCode;
    if (skillLower.includes('fastapi')) return Zap;

    // Data Science / Analysis
    if (skillLower.includes('sql') || skillLower.includes('mysql') || skillLower.includes('postgres') || skillLower.includes('database')) return Database;
    if (skillLower.includes('mongodb') || skillLower.includes('nosql')) return Database;
    if (skillLower.includes('power bi') || skillLower.includes('powerbi')) return TrendingUp;
    if (skillLower.includes('tableau')) return PieChart;
    if (skillLower.includes('excel')) return TableProperties;
    if (skillLower.includes('pandas') || skillLower.includes('numpy')) return Binary;
    if (skillLower.includes('data analysis') || skillLower.includes('statistics') || skillLower.includes('mathematics')) return BarChart3;
    if (skillLower.includes('data visualization')) return PieChart;

    // Cloud & DevOps
    if (skillLower.includes('aws') || skillLower.includes('amazon')) return Cloud;
    if (skillLower.includes('azure')) return Cloud;
    if (skillLower.includes('gcp') || skillLower.includes('google cloud')) return Cloud;
    if (skillLower.includes('docker')) return Container;
    if (skillLower.includes('kubernetes') || skillLower.includes('k8s')) return Boxes;
    if (skillLower.includes('devops')) return InfinityIcon;
    if (skillLower.includes('jenkins') || skillLower.includes('ci/cd')) return GitBranch;
    if (skillLower.includes('terraform')) return Settings;
    if (skillLower.includes('cloud')) return Cloud;

    // Cyber Security
    if (skillLower.includes('security') || skillLower.includes('cyber')) return Shield;
    if (skillLower.includes('hacking') || skillLower.includes('ethical')) return ShieldAlert;
    if (skillLower.includes('penetration') || skillLower.includes('pentest')) return Target;
    if (skillLower.includes('firewall')) return Lock;
    if (skillLower.includes('encryption')) return Lock;

    // Programming Languages
    if (skillLower.includes('java') && !skillLower.includes('javascript')) return Coffee;
    if (skillLower.includes('c++') || skillLower.includes('cpp')) return Wrench;
    if (skillLower.includes('c#') || skillLower.includes('csharp')) return Code2;
    if (skillLower.includes('php')) return Server;
    if (skillLower.includes('ruby')) return Code2;
    if (skillLower.includes('go') || skillLower.includes('golang')) return Zap;
    if (skillLower.includes('rust')) return Settings;

    // Digital Marketing
    if (skillLower.includes('seo')) return Search;
    if (skillLower.includes('social media')) return Share2;
    if (skillLower.includes('marketing')) return Megaphone;
    if (skillLower.includes('analytics')) return BarChart3;
    if (skillLower.includes('ads') || skillLower.includes('ppc')) return DollarSign;

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
<<<<<<< HEAD
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
=======
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden bg-background">
            {/* Ambient Glowing Orbs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
>>>>>>> 280b8f51662273188b64f0b40a35c912d538613c
                <div
                    className="absolute top-20 left-20 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199,24,56,0.2) 0%, transparent 70%)',
<<<<<<< HEAD
                        filter: 'blur(80px)',
=======
                        filter: 'blur(100px)',
>>>>>>> 280b8f51662273188b64f0b40a35c912d538613c
                    }}
                />
                <div
                    className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
                    style={{
<<<<<<< HEAD
                        background: 'radial-gradient(circle, rgba(161,14,38,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
=======
                        background: 'radial-gradient(circle, rgba(161,14,38,0.15) 0%, transparent 70%)',
                        filter: 'blur(100px)',
>>>>>>> 280b8f51662273188b64f0b40a35c912d538613c
                    }}
                />
            </div>

            {/* High-tech Engineering Dot Grid Background */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">
                            TECH STACK
                        </span>
                    </div>
                    <h2
                        className="font-bold text-white tracking-tight"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        Technologies You&apos;ll{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            Master
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                        Build expertise in cutting-edge technologies and tools used by top companies
                    </p>
                </motion.div>

<<<<<<< HEAD
                {/* Simple Clean Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
=======
                {/* Technologies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
>>>>>>> 280b8f51662273188b64f0b40a35c912d538613c
                    {skills.map((skill, index) => {
                        const IconComponent = getTechnologyIcon(skill);

                        return (
                            <motion.div
                                key={skill}
<<<<<<< HEAD
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className="group relative rounded-xl p-5 text-center"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-3">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: 'rgba(199, 24, 56, 0.12)',
                                            border: '1px solid rgba(199, 24, 56, 0.25)',
                                        }}
                                    >
                                        {isEmoji ? (
                                            <span className="text-2xl">{IconComponent}</span>
                                        ) : (
                                            <IconComponent className="w-7 h-7 text-primary" />
                                        )}
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <p className="text-sm font-semibold text-white leading-tight">
=======
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 80,
                                    damping: 12,
                                    delay: index * 0.03,
                                }}
                                whileHover={{ y: -6, scale: 1.025 }}
                                className="group relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-300 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(20, 10, 15, 0.8) 0%, rgba(8, 4, 6, 0.9) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Diagonal Sweep Glow Effect on Hover */}
                                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                                {/* Glowing Orb on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle at center, rgba(199, 24, 56, 0.1) 0%, transparent 70%)',
                                    }}
                                />

                                {/* Technology Icon Badge */}
                                <div
                                    className="relative w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 z-10"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.15) 0%, rgba(199, 24, 56, 0.04) 100%)',
                                        border: '1px solid rgba(199, 24, 56, 0.35)',
                                        boxShadow: '0 0 15px rgba(199, 24, 56, 0.12)',
                                    }}
                                >
                                    {/* Rotating dashed ring */}
                                    <div className="absolute inset-[-3px] rounded-full border border-dashed border-primary/20 group-hover:border-primary/50 group-hover:animate-spin pointer-events-none" style={{ animationDuration: '8s' }} />

                                    <IconComponent className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                {/* Skill Name */}
                                <p className="relative text-xs md:text-sm font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-wider uppercase z-10">
>>>>>>> 280b8f51662273188b64f0b40a35c912d538613c
                                    {skill}
                                </p>

                                {/* Bottom border hover light */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center pointer-events-none" />

                                {/* Border enhancement on hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        border: '1px solid rgba(199, 24, 56, 0.3)',
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
