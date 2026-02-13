"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "rgba(99, 102, 241, 0.8)",  // indigo-500
      "rgba(129, 140, 248, 0.8)", // indigo-400
      "rgba(139, 92, 246, 0.6)",  // violet-500
      "rgba(168, 85, 247, 0.9)",  // purple-500
      "rgba(255, 255, 255, 0.7)", // white
    ];

    const createParticle = (): Particle => ({
      x: canvas.width + Math.random() * 100,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      speedX: -(Math.random() * 3 + 1),
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    // Initialize particles
    for (let i = 0; i < 120; i++) {
      const particle = createParticle();
      particle.x = Math.random() * canvas.width;
      particlesRef.current.push(particle);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(99, 102, 241, 0.5)";

      particlesRef.current.forEach((particle, index) => {
        // Update position - flow from right to left
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Add slight wave motion
        particle.y += Math.sin(particle.x * 0.01) * 0.3;

        // Reset particle if it goes off screen
        if (particle.x < -10) {
          particlesRef.current[index] = createParticle();
        }

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connecting lines to nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
