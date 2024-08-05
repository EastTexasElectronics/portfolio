'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { createNoise3D } from 'simplex-noise';
import { motion } from 'framer-motion';

/**
 * Properties for the Vortex component.
 */
interface VortexProps {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    particleCount?: number;
    rangeY?: number;
    baseHue?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
}

const TAU = 2 * Math.PI;  // Full circle in radians

const rand = (n: number): number => n * Math.random();

const randRange = (n: number): number => n - rand(2 * n);

const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
};

/**
 * Linearly interpolate between two values.
 * @param n1 - The first value.
 * @param n2 - The second value.
 * @param speed - The interpolation factor.
 * @returns The interpolated value.
 */
const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

/**
 * Vortex component that renders a particle vortex animation.
 * @param {VortexProps} props - The properties for the Vortex component.
 * @returns {React.JSX.Element} The Vortex component.
 */
const Vortex = ({
    children,
    className,
    containerClassName,
    particleCount = 700,
    rangeY = 100,
    baseHue = 220,
    baseSpeed = 0.0,
    rangeSpeed = 1.5,
    baseRadius = 1,
    rangeRadius = 2,
    backgroundColor = '#000000',
}: VortexProps): React.JSX.Element => {
    const isMobile = useIsMobile();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const tickRef = useRef(0);
    const particlePropsRef = useRef<Float32Array>(new Float32Array());
    const centerRef = useRef<[number, number]>([0, 0]);

    // Particle properties constants
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const baseTTL = 50;
    const rangeTTL = 150;
    const rangeHue = 100;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const noise3D = createNoise3D();

    /**
     * Initialize a single particle.
     * @param i - The index of the particle.
     */
    const initParticle = useCallback((i: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const x = rand(canvas.width);
        const y = centerRef.current[1] + randRange(rangeY);
        const vx = 0;
        const vy = 0;
        const life = 0;
        const ttl = baseTTL + rand(rangeTTL);
        const speed = baseSpeed + rand(rangeSpeed);
        const radius = baseRadius + rand(rangeRadius);
        const hue = baseHue + rand(rangeHue);

        particlePropsRef.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    }, [baseHue, baseRadius, baseSpeed, rangeHue, rangeRadius, rangeSpeed, rangeTTL, rangeY]);

    /**
     * Initialize all particles.
     */
    const initParticles = useCallback(() => {
        tickRef.current = 0;
        particlePropsRef.current = new Float32Array(particlePropsLength);

        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            initParticle(i);
        }
    }, [initParticle, particlePropCount, particlePropsLength]);

    /**
     * Draw a single particle.
     * @param x - The starting x position.
     * @param y - The starting y position.
     * @param x2 - The ending x position.
     * @param y2 - The ending y position.
     * @param life - The current life of the particle.
     * @param ttl - The total time-to-live of the particle.
     * @param radius - The radius of the particle.
     * @param hue - The hue color of the particle.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const drawParticle = useCallback((
        x: number,
        y: number,
        x2: number,
        y2: number,
        life: number,
        ttl: number,
        radius: number,
        hue: number,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineWidth = radius;
        ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }, []);

    const checkBounds = useCallback((x: number, y: number, canvas: HTMLCanvasElement) => {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    }, []);

    /**
     * Update a single particle.
     * @param i - The index of the particle.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const updateParticle = useCallback((i: number, ctx: CanvasRenderingContext2D) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const i2 = 1 + i,
            i3 = 2 + i,
            i4 = 3 + i,
            i5 = 4 + i,
            i6 = 5 + i,
            i7 = 6 + i,
            i8 = 7 + i,
            i9 = 8 + i;
        const n = noise3D((particlePropsRef.current[i] ?? 0) * xOff, (particlePropsRef.current[i2] ?? 0) * yOff, tickRef.current * zOff) * noiseSteps * TAU;
        const x = particlePropsRef.current[i] ?? 0;
        const y = particlePropsRef.current[i2] ?? 0;
        const vx = lerp(particlePropsRef.current[i3] ?? 0, Math.cos(n), 0.5);
        const vy = lerp(particlePropsRef.current[i4] ?? 0, Math.sin(n), 0.5);
        let life = particlePropsRef.current[i5] ?? 0;
        const ttl = particlePropsRef.current[i6] ?? 0;
        const speed = particlePropsRef.current[i7] ?? 0;
        const x2 = x + vx * speed;
        const y2 = y + vy * speed;
        const radius = particlePropsRef.current[i8] ?? 0;
        const hue = particlePropsRef.current[i9] ?? 0;

        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

        life++;

        particlePropsRef.current[i] = x2;
        particlePropsRef.current[i2] = y2;
        particlePropsRef.current[i3] = vx;
        particlePropsRef.current[i4] = vy;
        particlePropsRef.current[i5] = life;

        (checkBounds(x2, y2, canvas) || life > ttl) && initParticle(i);
    }, [checkBounds, drawParticle, initParticle, noise3D]);

    /**
     * Draw all particles.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            updateParticle(i, ctx);
        }
    }, [updateParticle, particlePropCount, particlePropsLength]);

    /**
     * Apply a glow effect to the canvas.
     * @param canvas - The canvas element.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const renderGlow = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        ctx.save();
        ctx.filter = 'blur(8px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();

        ctx.save();
        ctx.filter = 'blur(4px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    }, []);

    /**
     * Render the canvas content to the screen.
     * @param canvas - The canvas element.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const renderToScreen = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    }, []);

    /**
     * Main draw function that updates and renders the particles.
     * @param canvas - The canvas element.
     * @param ctx - The 2D rendering context of the canvas.
     */
    const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        tickRef.current++;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);

        window.requestAnimationFrame(() => draw(canvas, ctx));
    }, [backgroundColor, drawParticles, renderGlow, renderToScreen]);

    const resize = useCallback((canvas: HTMLCanvasElement) => {
        const { innerWidth, innerHeight } = window;

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        centerRef.current[0] = 0.5 * canvas.width;
        centerRef.current[1] = 0.5 * canvas.height;
    }, []);

    /**
     * Set up the canvas and start the animation.
     */
    const setup = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (canvas && container) {
            const ctx = canvas.getContext('2d');

            if (ctx) {
                resize(canvas);
                initParticles();
                draw(canvas, ctx);
            }
        }
    }, [resize, initParticles, draw]);

    /**
     * Effect hook to set up and clean up the animation.
     */
    useEffect(() => {
        if (!isMobile) {
            setup();
        }
        const handleResize = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (canvas && ctx && !isMobile) {
                resize(canvas);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setup, resize, isMobile]);

    return (
        <div className={cn('relative h-full w-full vortex-container', containerClassName)}>
            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    ref={containerRef}
                    className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
                >
                    <canvas ref={canvasRef}></canvas>
                </motion.div>
            )}

            <div className={cn('relative z-10', className)}>
                {children}
            </div>
        </div>
    );
};

export default Vortex;
