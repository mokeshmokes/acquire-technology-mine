'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Fixed particle positions — computed once at module level (client bundle only),
// never touches window during SSR render.
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
    left: ((i * 17 + 7) % 97) + 1,   // deterministic 1–98%
    top:  ((i * 13 + 3) % 93) + 2,   // deterministic 2–95%
    dur:  20 + (i % 10),              // 20–29 s
    delay: (i * 0.8) % 8,
}));

export default function ContactVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasError, setHasError] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            video.play().catch((error) => {
                console.warn('Video autoplay failed:', error);
                setHasError(true);
            });
        };

        const handleError = () => {
            console.error('Video failed to load');
            setHasError(true);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        const playTimeout = setTimeout(() => {
            if (video.readyState >= 3) video.play().catch(() => {});
        }, 100);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('error', handleError);
            clearTimeout(playTimeout);
        };
    }, []);

    return (
        <>
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 0, willChange: 'transform' }}
            >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{ zIndex: 1, background: 'rgba(0,0,0,0.78)' }}
            />

            {/* Red gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 2,
                    background:
                        'linear-gradient(135deg, rgba(45,0,0,0.5), rgba(0,0,0,0.8), rgba(80,0,15,0.4))',
                }}
            />

            {/*
             * Floating Particles — CSS keyframe animation.
             * Previous version used Math.random() * window.innerWidth directly
             * in JSX which crashes on SSR ("window is not defined").
             * Now uses deterministic % positions and CSS animations — no window
             * access, no Framer infinite loops, no re-renders.
             */}
            {mounted && (
                <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 3 }}>
                    {PARTICLES.map((p, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle-drift"
                            style={{
                                left: `${p.left}%`,
                                top: `${p.top}%`,
                                animationDuration: `${p.dur}s`,
                                animationDelay: `${p.delay}s`,
                                willChange: 'transform',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Animated Light Beams — CSS transitions replace Framer loops */}
            <div className="absolute inset-0" style={{ zIndex: 3 }}>
                <motion.div
                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </div>

            {/* Error Fallback */}
            {hasError && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"
                    style={{ zIndex: 0 }}
                >
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-orb-1" />
                </div>
            )}
        </>
    );
}
