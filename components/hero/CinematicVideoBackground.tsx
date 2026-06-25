'use client';

import { useEffect, useRef, useState } from 'react';

export default function CinematicVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Handle video loaded
        const handleLoadedData = () => {
            // Ensure video plays
            video.play().catch(error => {
                console.warn('Video autoplay failed:', error);
                setHasError(true);
            });
        };

        // Handle video error
        const handleError = (e: Event) => {
            console.error('Video failed to load:', e);
            setHasError(true);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        // Force play attempt after mount
        const playTimeout = setTimeout(() => {
            if (video.readyState >= 3) {
                video.play().catch(error => {
                    console.warn('Video play attempt failed:', error);
                });
            }
        }, 100);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('error', handleError);
            clearTimeout(playTimeout);
        };
    }, []);

    // Check for reduced motion preference
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion && videoRef.current) {
            videoRef.current.pause();
        }
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
                preload="metadata"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 0, willChange: 'auto' }}
            >
                {/* Current video (2.72 MB): */}
                <source src="/videos/Hero-Section-Vid.mp4" type="video/mp4" />

                {/* Alternative video options: */}
                {/* <source src="/videos/hero-video1.mp4" type="video/mp4" />  2.43 MB */}
                {/* <source src="/herovedio.mp4" type="video/mp4" /> */}  {/* 69.38 MB - Large file */}

                 Your browser does not support the video tag.
            </video>

            {/* Error Fallback - Premium gradient background if video fails */}
            {hasError && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"
                    style={{ zIndex: 0 }}
                >
                    {/* Animated gradient orbs as fallback */}
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"
                        style={{
                            animation: 'pulse 8s ease-in-out infinite'
                        }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-hover/15 blur-[140px] rounded-full"
                        style={{
                            animation: 'pulse 10s ease-in-out infinite'
                        }}
                    />
                </div>
            )}
        </>
    );
}
