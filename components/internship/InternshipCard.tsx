'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Internship, internshipIcons } from '@/data/internships';

interface InternshipCardProps {
    internship: Internship;
    index: number;
}

export default function InternshipCard({ internship, index }: InternshipCardProps) {
    const DurationIcon = internshipIcons.duration;
    const CertificateIcon = internshipIcons.certificate;
    const ProjectIcon = internshipIcons.project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative h-full flex flex-col rounded-3xl overflow-hidden"
            style={{
                background: 'rgba(18, 10, 14, 0.92)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(180,0,40,0.12)',
                minHeight: '520px',
            }}
        >
            {/* Hover Glow Effect */}
            <div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(199,24,56,0.3) 0%, rgba(122,0,25,0.18) 40%, transparent 70%)',
                }}
            />

            {/* Border Glow on Hover */}
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    border: '1px solid rgba(255,255,255,0.13)',
                    boxShadow: '0 0 20px rgba(199,24,56,0.25)',
                }}
            />

            {/* Top Badge */}
            <div className="relative p-4 flex-shrink-0">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                        background: 'rgba(199,24,56,0.22)',
                        border: '1px solid rgba(199,24,56,0.35)',
                        boxShadow: '0 0 16px rgba(199,24,56,0.35)',
                    }}
                >
                    <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ boxShadow: '0 0 6px rgba(199,24,56,0.8)' }}
                    />
                    <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">
                        Internship
                    </span>
                </div>
            </div>

            {/* Image Placeholder */}
            <div
                className="relative h-[180px] flex-shrink-0"
                style={{
                    background: `linear-gradient(135deg, rgba(122,0,25,0.22) 0%, rgba(199,24,56,0.15) 50%, rgba(161,14,38,0.10) 100%)`,
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                            background: 'rgba(199,24,56,0.15)',
                            border: '2px solid rgba(199,24,56,0.3)',
                        }}
                    >
                        <span className="text-4xl">💼</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                    {internship.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    {internship.description}
                </p>

                {/* Info Grid */}
                <div className="space-y-3 mb-4">
                    {/* Duration */}
                    <div className="flex items-center gap-2">
                        <DurationIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                            <span className="text-xs text-white/50">Duration: </span>
                            <span className="text-sm text-white font-medium">{internship.duration}</span>
                        </div>
                    </div>

                    {/* Certificate */}
                    <div className="flex items-center gap-2">
                        <CertificateIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                            <span className="text-xs text-white/50">Certificate: </span>
                            <span className="text-sm text-white font-medium">{internship.certificate}</span>
                        </div>
                    </div>

                    {/* Live Project */}
                    <div className="flex items-center gap-2">
                        <ProjectIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                            <span className="text-xs text-white/50">Live Project: </span>
                            <span className="text-sm text-white font-medium">{internship.liveProject}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1" />

                {/* Apply Button */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative w-full px-6 py-3 text-white text-sm font-semibold rounded-xl overflow-hidden group/btn"
                    style={{
                        background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 0 16px rgba(199,24,56,0.35)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <div className="relative flex items-center justify-center gap-2">
                        <span>Apply for Internship</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </div>
                </motion.button>
            </div>

            {/* Corner Accents */}
            <div
                className="absolute top-3 right-3 w-10 h-10 border-t border-r rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: 'rgba(199,24,56,0.45)' }}
            />
            <div
                className="absolute bottom-3 left-3 w-10 h-10 border-b border-l rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: 'rgba(199,24,56,0.45)' }}
            />
        </motion.div>
    );
}
