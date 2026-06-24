'use client';

import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import MouseFollower from './MouseFollower';
import ScrollIndicator from './ScrollIndicator';
import CinematicVideoBackground from './CinematicVideoBackground';
import FloatingStatsCard from './FloatingStatsCard';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Full-Screen Cinematic Video Background */}
            <CinematicVideoBackground />

            {/* Enhanced Dark Overlay with Radial Gradient - Lighter for video visibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(8,11,13,0.60)] via-[rgba(8,11,13,0.45)] to-[rgba(8,11,13,0.35)]" />

            {/* Radial Gradient Center Spotlight */}
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(8,11,13,0.2)_0%,rgba(8,11,13,0.5)_100%)]" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />

            {/* Mouse Follower Effect */}
            <MouseFollower />

            {/* Main Content Container - LEFT-CENTER Layout */}
            <div className="relative z-[10] container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-32">
                    {/* Left Side - Hero Content (LEFT-CENTER) */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-7 order-1"
                    >
                        <HeroContent />
                    </motion.div>

                    {/* Right Side - Floating Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-5 order-2"
                    >
                        <FloatingStatsCard />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
