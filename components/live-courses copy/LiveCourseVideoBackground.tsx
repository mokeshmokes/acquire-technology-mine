'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEO_PLAYLIST = [
    '/videos/live-course/live1.mp4',
    '/videos/live-course/live2.mp4',
    '/videos/live-course/live3.mp4',
];

const CROSSFADE_DURATION = 1000; // 1 second smooth transition

export default function LiveCourseVideoBackground() {
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hasError, setHasError] = useState(false);
    const transitionTimeoutRef = useRef<NodeJS.Timeout>();

    // Preload all videos
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Preload videos for smooth transitions
        VIDEO_PLAYLIST.forEach((src) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'video';
            link.href = src;
            document.head.appendChild(link);
        });
    }, []);

    // Initialize first video
    useEffect(() => {
        const video1 = video1Ref.current;
        if (!video1) return;

        const handleLoadedData = () => {
            video1.play().catch((error) => {
                console.warn('Video autoplay failed:', error);
                setHasError(true);
            });
        };

        const handleError = () => {
            console.error('Video failed to load');
            setHasError(true);
        };

        video1.addEventListener('loadeddata', handleLoadedData);
        video1.addEventListener('error', handleError);

        // Force play attempt
        const playTimeout = setTimeout(() => {
            if (video1.readyState >= 3) {
                video1.play().catch(() => { });
            }
        }, 100);

        return () => {
            video1.removeEventListener('loadeddata', handleLoadedData);
            video1.removeEventListener('error', handleError);
            clearTimeout(playTimeout);
        };
    }, []);

    // Handle video transitions
    useEffect(() => {
        const currentVideo = activePlayer === 1 ? video1Ref.current : video2Ref.current;
        const nextVideo = activePlayer === 1 ? video2Ref.current : video1Ref.current;

        if (!currentVideo || !nextVideo) return;

        const handleVideoEnded = () => {
            if (isTransitioning) return;

            setIsTransitioning(true);

            // Calculate next video index
            const nextIndex = (currentVideoIndex + 1) % VIDEO_PLAYLIST.length;

            // Preload next video
            nextVideo.src = VIDEO_PLAYLIST[nextIndex];
            nextVideo.load();

            // Wait for next video to be ready
            const handleCanPlay = () => {
                // Start playing the next video
                nextVideo.play().catch(() => { });

                // Start cross-fade transition
                if (activePlayer === 1) {
                    // Fade in video2, fade out video1
                    video2Ref.current!.style.opacity = '1';
                    video1Ref.current!.style.opacity = '0';
                } else {
                    // Fade in video1, fade out video2
                    video1Ref.current!.style.opacity = '1';
                    video2Ref.current!.style.opacity = '0';
                }

                // Complete transition after fade duration
                transitionTimeoutRef.current = setTimeout(() => {
                    setActivePlayer(activePlayer === 1 ? 2 : 1);
                    setCurrentVideoIndex(nextIndex);
                    setIsTransitioning(false);

                    // Reset the hidden video for next use
                    const hiddenVideo = activePlayer === 1 ? video1Ref.current : video2Ref.current;
                    if (hiddenVideo) {
                        hiddenVideo.currentTime = 0;
                    }
                }, CROSSFADE_DURATION);

                // Clean up listener
                nextVideo.removeEventListener('canplay', handleCanPlay);
            };

            nextVideo.addEventListener('canplay', handleCanPlay);

            // Fallback if canplay doesn't fire
            setTimeout(() => {
                if (nextVideo.readyState >= 3) {
                    handleCanPlay();
                }
            }, 200);
        };

        currentVideo.addEventListener('ended', handleVideoEnded);

        return () => {
            currentVideo.removeEventListener('ended', handleVideoEnded);
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, [activePlayer, currentVideoIndex, isTransitioning]);

    // Handle reduced motion preference
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            video1Ref.current?.pause();
            video2Ref.current?.pause();
        }
    }, []);

    return (
        <>
            {/* Video Player 1 */}
            <video
                ref={video1Ref}
                autoPlay
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{
                    zIndex: 1,
                    opacity: activePlayer === 1 ? 1 : 0,
                }}
            >
                <source src={VIDEO_PLAYLIST[0]} type="video/mp4" />
            </video>

            {/* Video Player 2 */}
            <video
                ref={video2Ref}
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{
                    zIndex: 1,
                    opacity: activePlayer === 2 ? 1 : 0,
                }}
            >
                <source src={VIDEO_PLAYLIST[1]} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 2,
                    background: 'rgba(0, 0, 0, 0.72)',
                }}
            />

            {/* Dark Red Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 3,
                    background: 'linear-gradient(90deg, rgba(45, 0, 0, 0.35), rgba(0, 0, 0, 0.75), rgba(80, 0, 15, 0.30))',
                }}
            />

            {/* Error Fallback - Premium gradient background if videos fail */}
            {hasError && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"
                    style={{ zIndex: 0 }}
                >
                    {/* Animated gradient orbs as fallback */}
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"
                        style={{
                            animation: 'pulse 8s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-hover/15 blur-[140px] rounded-full"
                        style={{
                            animation: 'pulse 10s ease-in-out infinite',
                        }}
                    />
                </div>
            )}
        </>
    );
}
