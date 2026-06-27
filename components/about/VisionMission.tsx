'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { visionMissionData } from '@/data/aboutUs';

export default function VisionMission() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="group relative rounded-[20px] md:rounded-[28px] p-8 md:p-12 hover:scale-[1.02] transition-all duration-500"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(18px)',
                            border: '1px solid rgba(255, 0, 60, 0.18)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                        }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

                        <div className="space-y-6">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-500">
                                <visionMissionData.vision.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-white group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                                {visionMissionData.vision.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                                {visionMissionData.vision.description}
                            </p>
                        </div>

                        {/* Border Enhancement */}
                        <div
                            className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                border: '1px solid rgba(255, 0, 60, 0.4)',
                            }}
                        />
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="group relative rounded-[20px] md:rounded-[28px] p-8 md:p-12 hover:scale-[1.02] transition-all duration-500"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(18px)',
                            border: '1px solid rgba(255, 0, 60, 0.18)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                        }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

                        <div className="space-y-6">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-500">
                                <visionMissionData.mission.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-white group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                                {visionMissionData.mission.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                                {visionMissionData.mission.description}
                            </p>
                        </div>

                        {/* Border Enhancement */}
                        <div
                            className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                border: '1px solid rgba(255, 0, 60, 0.4)',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
