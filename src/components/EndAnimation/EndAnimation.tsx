import React from 'react';
import './EndAnimation.scss';
import { sources } from '../../data/sources';

interface EndAnimationProps {
  onComplete: () => void;
}

const EndAnimation: React.FC<EndAnimationProps> = ({ onComplete }) => {
  const handleCopyLightning = () => {
    navigator.clipboard.writeText("aldobarazutti@getalby.com");
  };

  return (
    <div className="end-animation">
      <div className="end-animation__content visible">
        <h2>Gratulation! 🎉</h2>
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
              <div className="code-block">
                <code>git clone https://github.com/Walpurga03/bitcoin-myth-buster.git</code>
                <button onClick={() => navigator.clipboard.writeText("git clone https://github.com/Walpurga03/bitcoin-myth-buster.git")} className="copy-button">
                  Kopieren
                </button>
              </div>
            </div>

            <div className="step">
              <span className="step-number">2</span>
              <p>Öffne die Datei <code>src/data/myths.ts</code> und passe die Fragen an deine Bedürfnisse an.</p>
              <p className="tip">Tipp: Die Fragen sollten mit Ja oder Nein beantwortet werden können!</p>
            </div>

            <div className="step">
              <span className="step-number">3</span>
              <p>Das Format für neue Fragen ist:</p>
              <div className="code-block example-code">
                <code>{`{
  id: 'deine-id',
  text: 'Deine Ja/Nein Frage?',
  isMyth: true/false,
  explanation: 'Deine Erklärung',
}`}</code>
              </div>
            </div>
          </div>

          <a href="https://github.com/Walpurga03/bitcoin-myth-buster" target="_blank" rel="noopener noreferrer" className="github-link">
            Zum GitHub Repository
          </a>
        </div>

        <div className="support">
          <h3>⚡ Lightning Unterstützung</h3>
          <p>Du findest das Projekt nützlich? Mit einer Lightning-Spende unterstützt du die weitere Entwicklung. Jeder Sat zählt!</p>
          <div className="lightning-box">
            <code>aldobarazutti@getalby.com</code>
            <button onClick={handleCopyLightning} className="copy-button">
              Kopieren
            </button>
          </div>
          <div className="nostr">
            <p>Wenn du ein Projekt hast, wo du Unterstützung brauchst, lass uns auf Nostr darüber plaudern:</p>
            <div className="code-block">
              <code>npub1hht9umpeet75w55uzs9lq6ksayfpcvl9lk64hye75j0yj4husq5ss8xsry</code>
              <button onClick={() => navigator.clipboard.writeText("npub1hht9umpeet75w55uzs9lq6ksayfpcvl9lk64hye75j0yj4husq5ss8xsry")} className="copy-button">
                Kopieren
              </button>
            </div>
          </div>
        </div>

        <button className="continue-button" onClick={onComplete}>
          Zurück zum Start
        </button>
      </div>
    </div>
  );
};

export default EndAnimation;
