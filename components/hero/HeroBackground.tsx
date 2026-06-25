'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle system — reduced to 25 particles, no connection drawing
        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        const particleCount = 25;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
            });
        }

        // Animation loop — particles only, no O(n²) connection drawing
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(194, 24, 56, ${particle.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                }}
            />

            {/* Radial Gradients - Static layers (no repeat: Infinity animations) */}
            <div
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(122,0,25,0.35) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    opacity: 0.4,
                }}
            />

            <div
                className="absolute bottom-0 right-0 w-[1000px] h-[1000px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(194,24,56,0.25) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    opacity: 0.3,
                }}
            />

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(161,14,38,0.2) 0%, transparent 70%)',
                    filter: 'blur(90px)',
                    opacity: 0.3,
                }}
            />

            {/* Animated Particles Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-60"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 0%, rgba(8,11,13,0.4) 70%, rgba(8,11,13,0.8) 100%)',
                }}
            />

            {/* Top Gradient for Header Blend */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
        </div>
    );
}
