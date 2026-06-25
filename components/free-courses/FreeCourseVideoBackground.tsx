'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function FreeCourseVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Single video with loop — eliminates the dual-video opacity crossfade
    // which forces a composite of two full-screen blurred video layers at once.
    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(currentSection);
        return () => observer.disconnect();
    }, []);

    const safePlay = useCallback((video: HTMLVideoElement | null) => {
        if (!video) return;
        const p = video.play();
        if (p !== undefined) {
            p.catch((err) => {
                if (err.name !== 'AbortError') console.log('Video play prevented:', err.name);
            });
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (isInView) {
            safePlay(video);
        } else {
            video.pause();
        }
    }, [isInView, safePlay]);

    return (
        <div ref={sectionRef} className="absolute inset-0 w-full h-full overflow-hidden">
            {/*
             * Removed: filter: blur(2px) on the video element.
             * GPU blur on a video triggers a full repaint every frame — this is
             * the single biggest source of lag in the section. The overlays
             * below provide all the visual darkening needed.
             */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                    opacity: 1,
                    // willChange keeps this on its own GPU layer
                    willChange: 'transform',
                    // brightness/contrast only — no blur, no saturate recompute
                    filter: 'brightness(0.55) contrast(1.15)',
                }}
            >
                <source src="/videos/course-vedio1.mp4" type="video/mp4" />
                <source src="/videos/course-video.mp4" type="video/mp4" />
            </video>

            {/* Dark gradient overlays — these are cheap flat composites */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(8,0,0,0.65) 0%, rgba(20,0,8,0.5) 50%, rgba(0,0,0,0.72) 100%)',
                }}
            />
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(122,0,25,0.08) 0%, rgba(8,8,12,0.3) 60%, rgba(0,0,0,0.6) 100%)',
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent z-[1]" />
        </div>
    );
}
