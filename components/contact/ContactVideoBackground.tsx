'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasError, setHasError] = useState(false);

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
            if (video.readyState >= 3) {
                video.play().catch(() => { });
            }
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
                style={{ zIndex: 0 }}
            >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 1,
                    background: 'rgba(0, 0, 0, 0.78)',
                }}
            />

            {/* Dark Red Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 2,
                    background:
                        'linear-gradient(135deg, rgba(45, 0, 0, 0.5), rgba(0, 0, 0, 0.8), rgba(80, 0, 15, 0.4))',
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 3 }}>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            x: [null, Math.random() * window.innerWidth],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            {/* Animated Light Beams */}
            <div className="absolute inset-0" style={{ zIndex: 3 }}>
                <motion.div
                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            {/* Error Fallback */}
            {hasError && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"
                    style={{ zIndex: 0 }}
                >
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"
                        style={{ animation: 'pulse 8s ease-in-out infinite' }}
                    />
                </div>
            )}
        </>
    );
}
