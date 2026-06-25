'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutHeroVideoBackground() {
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
                    background: 'rgba(0, 0, 0, 0.72)',
                }}
            />

            {/* Dark Red Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 2,
                    background:
                        'linear-gradient(135deg, rgba(45, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(80, 0, 15, 0.35))',
                }}
            />

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
                    <div
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-hover/15 blur-[140px] rounded-full"
                        style={{ animation: 'pulse 10s ease-in-out infinite' }}
                    />
                </div>
            )}
        </>
    );
}
