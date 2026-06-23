'use client';

import { motion } from 'framer-motion';
import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import FloatingElements from './FloatingElements';
import MouseFollower from './MouseFollower';
import ScrollIndicator from './ScrollIndicator';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Animated Background */}
            <HeroBackground />

            {/* Floating Elements */}
            <FloatingElements />

            {/* Mouse Follower Effect */}
            <MouseFollower />

            {/* Main Content Container */}
            <div className="relative z-[1] container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Video Showcase (55%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 order-2 lg:order-1"
                    >
                        <div className="w-full h-[620px]">
                            <HeroVideo />
                        </div>
                    </motion.div>

                    {/* Right Side - Content (45%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5 order-1 lg:order-2 flex items-center"
                    >
                        <HeroContent />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
        </section>
    );
}
