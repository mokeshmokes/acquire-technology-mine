'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function FreeCourseVideoBackground() {
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);

    // Intersection Observer to pause/play based on viewport visibility
    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    // Safe play function
    const safePlay = useCallback((video: HTMLVideoElement | null) => {
        if (!video) return;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                // Auto-play was prevented - this is normal
                if (error.name !== 'AbortError') {
                    console.log('Video play prevented:', error.name);
                }
            });
        }
    }, []);

    // Handle play/pause based on viewport visibility
    useEffect(() => {
        const video1 = video1Ref.current;
        const video2 = video2Ref.current;

        if (!video1 || !video2 || !isVideoReady) return;

        if (isInView) {
            if (activeVideo === 1) {
                safePlay(video1);
            } else {
                safePlay(video2);
            }
        } else {
            video1.pause();
            video2.pause();
        }
    }, [isInView, activeVideo, isVideoReady, safePlay]);

    // Handle video alternation for seamless loop
    useEffect(() => {
        const video1 = video1Ref.current;
        const video2 = video2Ref.current;

        if (!video1 || !video2) return;

        const handleVideo1End = () => {
            try {
                setActiveVideo(2);
                video2.currentTime = 0;
                if (isInView) {
                    safePlay(video2);
                }
            } catch (err) {
                console.error('Error handling video 1 end:', err);
            }
        };

        const handleVideo2End = () => {
            try {
                setActiveVideo(1);
                video1.currentTime = 0;
                if (isInView) {
                    safePlay(video1);
                }
            } catch (err) {
                console.error('Error handling video 2 end:', err);
            }
        };

        const handleCanPlay = () => {
            setIsVideoReady(true);
        };

        // Add event listeners
        video1.addEventListener('ended', handleVideo1End);
        video2.addEventListener('ended', handleVideo2End);
        video1.addEventListener('canplay', handleCanPlay);

        return () => {
            video1.removeEventListener('ended', handleVideo1End);
            video2.removeEventListener('ended', handleVideo2End);
            video1.removeEventListener('canplay', handleCanPlay);
        };
    }, [isInView, safePlay]);

    return (
        <div ref={sectionRef} className="absolute inset-0 w-full h-full overflow-hidden">
            <video
                ref={video1Ref}
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms]"
                style={{
                    opacity: activeVideo === 1 ? 1 : 0,
                    filter: 'brightness(0.65) contrast(1.2) saturate(1.1) blur(2px)',
                    willChange: 'opacity',
                }}
                onError={(e) => {
                    console.log('Video 1 loading error:', e.currentTarget.error);
                }}
            >
                <source src="/videos/course-vedio1.mp4" type="video/mp4" />
            </video>

            <video
                ref={video2Ref}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms]"
                style={{
                    opacity: activeVideo === 2 ? 1 : 0,
                    filter: 'brightness(0.65) contrast(1.2) saturate(1.1) blur(2px)',
                    willChange: 'opacity',
                }}
                onError={(e) => {
                    console.log('Video 2 loading error:', e.currentTarget.error);
                }}
            >
                <source src="/videos/course-video.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'linear-gradient(180deg, rgba(8, 0, 0, 0.65) 0%, rgba(20, 0, 8, 0.55) 50%, rgba(0, 0, 0, 0.75) 100%)',
                }}
            />

            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(122, 0, 25, 0.08) 0%, rgba(8, 8, 12, 0.35) 60%, rgba(0, 0, 0, 0.65) 100%)',
                }}
            />

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent z-[1]" />
        </div>
    );
}
