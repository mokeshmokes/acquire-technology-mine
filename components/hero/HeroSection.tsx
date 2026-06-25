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

            {/* Bottom Fade — tall multi-stop gradient for a smooth dissolve into the next section */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
                style={{
                    height: '40%',
                    background: 'linear-gradient(to top, var(--background) 0%, rgba(8,11,13,0.97) 15%, rgba(8,11,13,0.85) 35%, rgba(8,11,13,0.5) 60%, rgba(8,11,13,0.15) 80%, transparent 100%)',
                }}
            />

            {/* Left edge fade */}
            <div
                className="absolute inset-y-0 left-0 z-[2] pointer-events-none w-32"
                style={{
                    background: 'linear-gradient(to right, rgba(8,11,13,0.6) 0%, transparent 100%)',
                }}
            />

            {/* Right edge fade */}
            <div
                className="absolute inset-y-0 right-0 z-[2] pointer-events-none w-32"
                style={{
                    background: 'linear-gradient(to left, rgba(8,11,13,0.6) 0%, transparent 100%)',
                }}
            />

            {/* Mouse Follower Effect */}
            <MouseFollower />

            {/* Main Content Container */}
            <div className="relative z-[10] container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
                <div className="w-full py-32">
                    {/* Left Side - Hero Content — full width now */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="max-w-2xl"
                    >
                        <HeroContent />
                    </motion.div>
                </div>
            </div>

            {/* Stats Card — absolute bottom-right corner */}
            <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute bottom-16 right-6 lg:right-12 z-[10] w-72"
            >
                <FloatingStatsCard />
            </motion.div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
