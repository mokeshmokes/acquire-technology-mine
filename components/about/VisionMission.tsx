'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Globe, Code2, BookOpen, Brain, Briefcase } from 'lucide-react';
import { visionMissionData } from '@/data/aboutUs';

export default function VisionMission() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const VisionIcon = visionMissionData.vision.icon;
    const MissionIcon = visionMissionData.mission.icon;

    const visionHighlights = [
        'Global Careers',
        'Practical-First',
        'Tech Curriculums',
    ];

    const missionHighlights = [
        '1-on-1 Mentorship',
        'Real-world Projects',
        'Placement Support',
    ];

    return (
        <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden bg-background">
            {/* Ambient Lighting Gradients */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <div
                    className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(199,24,56,0.2) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(161,14,38,0.15) 0%, transparent 70%)' }}
                />
            </div>

            {/* Futuristic Concentric Background Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
                <div className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full border border-dashed border-white/20 animate-[spin_120s_linear_infinite]" />
                <div className="absolute w-[900px] h-[900px] md:w-[1000px] md:h-[1000px] rounded-full border border-dashed border-primary/20 animate-[spin_180s_linear_infinite_reverse]" />
                <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white/10" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                            OUR VALUES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Our Purpose & <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">Commitment</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
                        Empowering digital leaders of tomorrow by bridging the gap between student aspirations and global career readiness.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Vision Card (01) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className="w-full max-w-[420px] md:max-w-[450px] mx-auto relative"
                    >
                        {/* Orbiting Track and Icons */}
                        <div className="absolute inset-[-30px] md:inset-[-40px] rounded-full border border-dashed border-white/5 group-hover:border-primary/10 transition-colors duration-700 pointer-events-none z-0 animate-[spin_80s_linear_infinite]" />
                        <div className="absolute inset-[-30px] md:inset-[-40px] rounded-full pointer-events-none z-20 animate-[spin_60s_linear_infinite]">
                            {/* Icon 1: Top-Left */}
                            <div className="absolute top-[8%] left-[8%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <GraduationCap className="w-5 h-5" />
                                </motion.div>
                            </div>
                            {/* Icon 2: Top-Right */}
                            <div className="absolute top-[8%] right-[8%] translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <Globe className="w-5 h-5" />
                                </motion.div>
                            </div>
                            {/* Icon 3: Bottom */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <Code2 className="w-5 h-5" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Bob Container */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative rounded-full aspect-square w-full p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden z-10 cursor-pointer"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(30, 10, 18, 0.96) 0%, rgba(10, 5, 8, 0.98) 100%)',
                                border: '2px solid rgba(255,255,255,0.06)',
                                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
                            }}
                        >
                            {/* Neon Header Accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]" />

                            {/* Digital Dot Matrix Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                                    backgroundSize: '24px 24px',
                                }}
                            />

                            {/* Interactive hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, rgba(199,24,56,0.15) 0%, transparent 60%)',
                                }}
                            />

                            {/* Large Background Watermark Number */}
                            <div className="absolute text-[160px] md:text-[220px] font-black select-none pointer-events-none opacity-[0.015] group-hover:opacity-[0.035] text-white transition-all duration-500 font-sans leading-none z-0">
                                01
                            </div>

                            <div className="space-y-5 md:space-y-6 relative z-10 flex flex-col items-center">
                                {/* Icon Container */}
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(199,24,56,0.25)] transition-all duration-500">
                                    <VisionIcon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Info */}
                                <div className="space-y-2 text-center px-4">
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-[0.15em] uppercase group-hover:text-primary transition-colors duration-300">
                                        {visionMissionData.vision.title}
                                    </h3>
                                    <p className="text-[11px] md:text-sm text-white/70 leading-relaxed max-w-[260px] md:max-w-[320px]">
                                        {visionMissionData.vision.description}
                                    </p>
                                </div>

                                {/* Divider line */}
                                <div className="h-[1px] w-20 bg-white/10" />

                                {/* Highlights Capsules */}
                                <div className="flex flex-wrap justify-center gap-2 max-w-[280px] md:max-w-[340px]">
                                    {visionHighlights.map((item) => (
                                        <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:border-primary/30 group-hover:bg-primary/[0.03] transition-all duration-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            <span className="text-[9px] md:text-[10px] text-white/90 font-bold tracking-wider uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Border Overlay on Hover */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    border: '1px solid rgba(199,24,56,0.35)',
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Mission Card (02) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="w-full max-w-[420px] md:max-w-[450px] mx-auto relative"
                    >
                        {/* Orbiting Track and Icons */}
                        <div className="absolute inset-[-30px] md:inset-[-40px] rounded-full border border-dashed border-white/5 group-hover:border-primary/10 transition-colors duration-700 pointer-events-none z-0 animate-[spin_80s_linear_infinite_reverse]" />
                        <div className="absolute inset-[-30px] md:inset-[-40px] rounded-full pointer-events-none z-20 animate-[spin_60s_linear_infinite_reverse]">
                            {/* Icon 1: Top-Left */}
                            <div className="absolute top-[8%] left-[8%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <BookOpen className="w-5 h-5" />
                                </motion.div>
                            </div>
                            {/* Icon 2: Top-Right */}
                            <div className="absolute top-[8%] right-[8%] translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <Brain className="w-5 h-5" />
                                </motion.div>
                            </div>
                            {/* Icon 3: Bottom */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto">
                                <motion.div 
                                    whileHover={{ scale: 1.15 }}
                                    className="w-10 h-10 rounded-full bg-[#120A0E] border border-white/10 flex items-center justify-center text-primary/80 shadow-lg cursor-pointer hover:border-primary/50 transition-colors"
                                >
                                    <Briefcase className="w-5 h-5" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Bob Container */}
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative rounded-full aspect-square w-full p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden z-10 cursor-pointer"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(30, 10, 18, 0.96) 0%, rgba(10, 5, 8, 0.98) 100%)',
                                border: '2px solid rgba(255,255,255,0.06)',
                                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
                            }}
                        >
                            {/* Neon Header Accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]" />

                            {/* Digital Dot Matrix Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                                    backgroundSize: '24px 24px',
                                }}
                            />

                            {/* Interactive hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, rgba(199,24,56,0.15) 0%, transparent 60%)',
                                }}
                            />

                            {/* Large Background Watermark Number */}
                            <div className="absolute text-[160px] md:text-[220px] font-black select-none pointer-events-none opacity-[0.015] group-hover:opacity-[0.035] text-white transition-all duration-500 font-sans leading-none z-0">
                                02
                            </div>

                            <div className="space-y-5 md:space-y-6 relative z-10 flex flex-col items-center">
                                {/* Icon Container */}
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(199,24,56,0.25)] transition-all duration-500">
                                    <MissionIcon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Info */}
                                <div className="space-y-2 text-center px-4">
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-[0.15em] uppercase group-hover:text-primary transition-colors duration-300">
                                        {visionMissionData.mission.title}
                                    </h3>
                                    <p className="text-[11px] md:text-sm text-white/70 leading-relaxed max-w-[260px] md:max-w-[320px]">
                                        {visionMissionData.mission.description}
                                    </p>
                                </div>

                                {/* Divider line */}
                                <div className="h-[1px] w-20 bg-white/10" />

                                {/* Highlights Capsules */}
                                <div className="flex flex-wrap justify-center gap-2 max-w-[280px] md:max-w-[340px]">
                                    {missionHighlights.map((item) => (
                                        <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:border-primary/30 group-hover:bg-primary/[0.03] transition-all duration-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            <span className="text-[9px] md:text-[10px] text-white/90 font-bold tracking-wider uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Border Overlay on Hover */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    border: '1px solid rgba(199,24,56,0.35)',
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
