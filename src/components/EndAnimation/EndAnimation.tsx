import React, { useEffect, useRef } from 'react';
import './EndAnimation.scss';
import { sources } from '../../data/sources';

interface EndAnimationProps {
  onComplete: () => void;
}

const EndAnimation: React.FC<EndAnimationProps> = ({ onComplete }) => {
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const bitcoinLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random()
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.005;

        if (particle.opacity <= 0) {
          particles[index] = createParticle();
          particles[index].opacity = 1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 147, 26, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((particle2) => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(247, 147, 26, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopyLightning = () => {
    navigator.clipboard.writeText("aldobarazutti@getalby.com");
    if (bitcoinLogoRef.current) {
      bitcoinLogoRef.current.classList.add('copied');
      setTimeout(() => {
        if (bitcoinLogoRef.current) {
          bitcoinLogoRef.current.classList.remove('copied');
        }
      }, 1500);
    }
  };

  return (
    <div className="end-animation">
      <canvas ref={particlesRef} className="particles-canvas" />
      
      <div className="bitcoin-logo" ref={bitcoinLogoRef}>
        <img src="/bitcoin-logo.svg" alt="Bitcoin Logo" />
      </div>
      
      <div className="end-animation__content visible">
        <div className="glowing-title">
          <h2>Gratulation! 🎉</h2>
          <div className="glowing-orbs">
            <div className="orb"></div>
            <div className="orb"></div>
            <div className="orb"></div>
          </div>
        </div>

        <div className="message">
          <p>Du hast es geschafft! Du kennst jetzt die häufigsten Bitcoin-Mythen und ihre Widerlegungen.</p>
        </div>

        <div className="resources">
          <h3>Weiterführende Ressourcen</h3>
          <div className="resources-grid">
            {sources.map(source => (
              <a 
                key={source.id} 
                href={source.resources[0].url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="resource-card"
              >
                <h4>{source.name}</h4>
                <p>{source.description}</p>
                <span className={`resource-type ${source.type}`}>{source.type}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contribute">
          <h3>Open Source</h3>
          <p>Der Code steht jedem zur Verfügung. So kannst du ihn für deine eigenen Bitcoin-Mythen nutzen:</p>
          
          <div className="contribute-steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Clone das GitHub Repository:</p>
              <p className="support-text">Verwende deine eigenen Fragen und clone dieses Repo - mach was Cooles daraus! 🚀</p>
              <div className="code-block">
                <code>git clone https://github.com/Walpurga03/bitcoin-myth-buster.git</code>
                <button 
                  onClick={() => navigator.clipboard.writeText("git clone https://github.com/Walpurga03/bitcoin-myth-buster.git")} 
                  className="copy-button"
                >
                  Kopieren
                </button>
              </div>
            </div>

            <div className="step">
              <span className="step-number">2</span>
              <p>Unterstütze das Projekt mit Lightning:</p>
              <p className="support-text">Mit jedem Sat wächst meine Motivation für neue Bitcoin Projekte! ⚡️</p>
              <div className="code-block">
                <code>aldobarazutti@getalby.com</code>
                <button 
                  onClick={handleCopyLightning}
                  className="copy-button"
                >
                  Kopieren
                </button>
              </div>
            </div>

            <div className="step">
              <span className="step-number">3</span>
              <p>Lass uns auf Nostr über dein Projekt sprechen:</p>
              <p className="support-text">Wenn du Ideen hast oder Unterstützung brauchst, melde dich einfach auf Nostr! 🤝</p>
              <div className="code-block">
                <code>npub1hht9umpeet75w55uzs9lq6ksayfpcvl9lk64hye75j0yj4husq5ss8xsry</code>
                <button 
                  onClick={() => navigator.clipboard.writeText("npub1hht9umpeet75w55uzs9lq6ksayfpcvl9lk64hye75j0yj4husq5ss8xsry")} 
                  className="copy-button"
                >
                  Kopieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={onComplete}>
        Zurück zum Start
      </button>
    </div>
  );
};

export default EndAnimation;
