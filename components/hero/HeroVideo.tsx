'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    PictureInPicture2,
} from 'lucide-react';

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    // Stable array reference
    const playbackRates = useMemo(() => [0.5, 0.75, 1, 1.25, 1.5, 2], []);

    // Format time (seconds to mm:ss)
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Toggle play/pause
    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, []);

    // Toggle mute
    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    }, []);

    // Toggle fullscreen
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    // Toggle picture in picture
    const togglePip = useCallback(async () => {
        if (videoRef.current && document.pictureInPictureEnabled) {
            try {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                } else {
                    await videoRef.current.requestPictureInPicture();
                }
            } catch (error) {
                console.error('PiP error:', error);
            }
        }
    }, []);

    // Seek video
    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = pos * videoRef.current.duration;
        }
    }, []);

    // Cycle playback speed
    const cyclePlaybackRate = useCallback(() => {
        const currentIndex = playbackRates.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % playbackRates.length;
        const newRate = playbackRates[nextIndex];
        if (videoRef.current) {
            videoRef.current.playbackRate = newRate;
            setPlaybackRate(newRate);
        }
    }, [playbackRate, playbackRates]);

    // Auto-hide controls
    const resetControlsTimeout = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying && !isDragging) {
                setShowControls(false);
            }
        }, 3000);
    }, [isPlaying, isDragging]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            switch (e.key.toLowerCase()) {
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'arrowleft':
                    if (videoRef.current) {
                        videoRef.current.currentTime -= 5;
                    }
                    break;
                case 'arrowright':
                    if (videoRef.current) {
                        videoRef.current.currentTime += 5;
                    }
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [togglePlay, toggleMute, toggleFullscreen]);

    // Video event handlers
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            console.log('Video loaded successfully');
            setIsLoaded(true);
            setDuration(video.duration);
        };

        const handleCanPlay = () => {
            setIsLoaded(true);
            setDuration(video.duration);
        };

        const handleError = (e: Event) => {
            console.error('Video loading error:', e);
            setHasError(true);
            setIsLoaded(true);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleProgress = () => {
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                const percentage = (bufferedEnd / video.duration) * 100;
                setBuffered(percentage);
            }
        };

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        // Check if already loaded
        if (video.readyState >= 3) {
            setIsLoaded(true);
            setDuration(video.duration);
        }

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('error', handleError);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('progress', handleProgress);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('error', handleError);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('progress', handleProgress);
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    // Fullscreen change listener
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full h-full group"
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            onMouseMove={resetControlsTimeout}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => !isDragging && setShowControls(false)}
        >
            {/* Animated Glow Effect */}
            <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-primary via-primary-hover to-primary rounded-[32px] opacity-20 blur-3xl"
                animate={{
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Premium Floating Frame Container */}
            <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-primary/20 bg-black shadow-2xl">
                {/* Video Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="relative w-full h-full"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        disablePictureInPicture={false}
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                        style={{
                            objectPosition: 'center',
                            filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
                        }}
                        onClick={togglePlay}
                    >
                        <source src="/herovedio.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Premium Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/30 z-10 pointer-events-none" />

                {/* Animated Light Sweep */}
                <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, rgba(199, 24, 56, 0.15) 50%, transparent 100%)',
                    }}
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 3,
                    }}
                />

                {/* Custom Video Controls */}
                <AnimatePresence>
                    {showControls && isLoaded && !hasError && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 z-30 p-6"
                        >
                            {/* Control Bar Container */}
                            <div className="bg-[#12080C]/90 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Progress Bar */}
                                <div
                                    className="relative h-1 bg-white/10 cursor-pointer group/progress"
                                    onClick={handleSeek}
                                    onMouseDown={() => setIsDragging(true)}
                                    onMouseUp={() => setIsDragging(false)}
                                >
                                    {/* Buffered */}
                                    <div
                                        className="absolute h-full bg-white/20 transition-all duration-300"
                                        style={{ width: `${buffered}%` }}
                                    />
                                    {/* Progress */}
                                    <motion.div
                                        className="absolute h-full bg-gradient-to-r from-primary to-primary-hover"
                                        style={{ width: `${progress}%` }}
                                    />
                                    {/* Hover indicator */}
                                    <div className="absolute h-2 -top-0.5 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" style={{ width: `${progress}%` }} />
                                </div>

                                {/* Controls */}
                                <div className="flex items-center justify-between px-4 py-3">
                                    {/* Left Controls */}
                                    <div className="flex items-center gap-4">
                                        {/* Play/Pause */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={togglePlay}
                                            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-5 h-5 text-white" fill="white" />
                                            ) : (
                                                <Play className="w-5 h-5 text-white" fill="white" />
                                            )}
                                        </motion.button>

                                        {/* Mute/Unmute */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={toggleMute}
                                            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5 text-white" />
                                            ) : (
                                                <Volume2 className="w-5 h-5 text-primary" />
                                            )}
                                        </motion.button>

                                        {/* Time */}
                                        <div className="text-sm text-white font-medium tabular-nums">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>
                                    </div>

                                    {/* Right Controls */}
                                    <div className="flex items-center gap-2">
                                        {/* Playback Speed */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={cyclePlaybackRate}
                                            className="px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium text-white"
                                            aria-label="Playback speed"
                                        >
                                            {playbackRate}x
                                        </motion.button>

                                        {/* Picture in Picture */}
                                        {document.pictureInPictureEnabled && (
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={togglePip}
                                                className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                                                aria-label="Picture in Picture"
                                            >
                                                <PictureInPicture2 className="w-5 h-5 text-white" />
                                            </motion.button>
                                        )}

                                        {/* Fullscreen */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={toggleFullscreen}
                                            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                                            aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                                        >
                                            {isFullscreen ? (
                                                <Minimize className="w-5 h-5 text-white" />
                                            ) : (
                                                <Maximize className="w-5 h-5 text-white" />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Corner Highlights */}
                <div className="absolute top-0 left-0 w-24 h-24 z-20 pointer-events-none">
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 z-20 pointer-events-none">
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />
                </div>

                {/* Loading State */}
                {!isLoaded && !hasError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-elevated z-40">
                        <div className="text-center space-y-4">
                            <motion.div
                                className="w-16 h-16 mx-auto rounded-full border-4 border-primary/20 border-t-primary"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                            <p className="text-muted text-sm">Loading video...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {hasError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-elevated z-40">
                        <div className="text-center space-y-4 px-6">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-3xl">⚠️</span>
                            </div>
                            <p className="text-muted text-sm">Unable to load video.</p>
                            <p className="text-xs text-muted/50">Expected: /herovedio.mp4</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Floating Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-40"
            >
                <div className="glass-effect border border-primary/30 rounded-full px-6 py-3 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-2">
                        <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.6, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <span className="text-sm font-medium text-white">Live Learning Environment</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
