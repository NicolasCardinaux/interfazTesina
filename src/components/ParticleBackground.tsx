import React, { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Aumentamos la cantidad para que sean "más partículas"
    const numParticles = 80;
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };
    let animationFrameId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Velocidad de deriva (drift)
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        // Tamaño ligeramente menor ("un pelín apenitas menos notorias")
        this.radius = Math.random() * 1.5 + 1.2; 
        // Menor opacidad base
        this.alpha = Math.random() * 0.4 + 0.3; 
      }

      draw() {
        if (!ctx) return;
        
        // Efecto de resplandor (Glow) atenuado
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.2})`;
        ctx.fill();

        // Núcleo de la partícula
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        // Movimiento base
        this.x += this.vx;
        this.y += this.vy;

        // Rebote en los bordes
        if (this.x < 0) this.vx = Math.abs(this.vx);
        if (this.x > canvas.width) this.vx = -Math.abs(this.vx);
        if (this.y < 0) this.vy = Math.abs(this.vy);
        if (this.y > canvas.height) this.vy = -Math.abs(this.vy);

        // Interacción para esquivar el mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulseRadius = 130; // Distancia a la que empiezan a esquivar

        if (distance < repulseRadius) {
          // Calcula la fuerza de repulsión (más fuerte cuanto más cerca)
          const force = (repulseRadius - distance) / repulseRadius;
          const pushX = (dx / distance) * force * 6;
          const pushY = (dy / distance) * force * 6;

          // Empuja la partícula alejándola del mouse
          this.x -= pushX;
          this.y -= pushY;
        }

        this.draw();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Usamos el contenedor padre para capturar el hover correctamente
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full opacity-60 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none"
    />
  );
}
