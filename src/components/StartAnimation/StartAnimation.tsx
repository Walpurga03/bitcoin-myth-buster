import React, { useEffect, useRef, useState, useCallback } from 'react';
import './StartAnimation.scss';
import BitcoinLogo from '../../assets/bitcoin-logo.svg';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  glowIntensity: number;
}

interface StartAnimationProps {
  onComplete?: () => void;
}

const StartAnimation: React.FC<StartAnimationProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Draw Bitcoin logo function
  const drawBitcoinLogo = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!logoRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.35;
    const size = Math.min(canvas.width, canvas.height) * 0.2;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(14 * Math.PI / 180);
    
    const scale = size / 580;
    const logoSize = 580 * scale;
    ctx.drawImage(
      logoRef.current,
      -logoSize / 2,
      -logoSize / 2,
      logoSize,
      logoSize
    );
    
    ctx.restore();
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    if (!ctx || !canvas || !isAnimating) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background gradient
    const bgGradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    bgGradient.addColorStop(0, '#1a1a1a');
    bgGradient.addColorStop(1, '#000000');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current.forEach((particle, i) => {
      // Mouse repulsion
      const dx = mousePosition.x - particle.x;
      const dy = mousePosition.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (1 - distance / 100) * 0.6;
        particle.vx -= dx * force * 0.01;
        particle.vy -= dy * force * 0.01;
      }

      // Apply velocity limits
      const maxSpeed = 2;
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (speed > maxSpeed) {
        particle.vx = (particle.vx / speed) * maxSpeed;
        particle.vy = (particle.vy / speed) * maxSpeed;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Update glow intensity
      particle.glowIntensity = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247, 147, 26, ${0.3 + particle.glowIntensity * 0.7})`;
      ctx.shadowColor = '#f7931a';
      ctx.shadowBlur = 10 * particle.glowIntensity;
      ctx.fill();

      // Draw connections
      particlesRef.current.forEach((otherParticle, j) => {
        if (i < j) {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = `rgba(247, 147, 26, ${opacity})`;
            ctx.stroke();
          }
        }
      });
    });

    // Draw Bitcoin logo
    if (logoRef.current) {
      drawBitcoinLogo(ctx);
    }

    // Request next frame
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isAnimating, mousePosition, drawBitcoinLogo]);

  useEffect(() => {
    // Load Bitcoin logo
    const logo = new Image();
    logo.src = BitcoinLogo;
    logo.onload = () => {
      logoRef.current = logo;
    };

    // Set up canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    // Set canvas size
    const updateCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    updateCanvasSize();

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const numParticles = 50;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          glowIntensity: Math.random()
        });
      }
      particlesRef.current = particles;
    };
    initParticles();

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [animate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`start-animation ${!isAnimating ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} className="animation-canvas" />
      <div className="content-overlay">
        <div className="text-container">
          <h1 className="title">Bitcoin Myth Buster</h1>
          <p className="subtitle">Entdecken Sie die Wahrheit über Bitcoin</p>
        </div>
      </div>
    </div>
  );
};

export default StartAnimation;
