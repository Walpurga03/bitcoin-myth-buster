import React, { useState } from 'react';
import { SpeakerButton } from '../SpeakerButton/SpeakerButton';
import { sources } from '../../data/sources';
import './ExplanationPopup.scss';

interface ExplanationPopupProps {
  explanation: string;
  isOpen: boolean;
  isCorrect: boolean;
  onClose: () => void;
  sourceIds?: string[]; // Optional
}

export const ExplanationPopup: React.FC<ExplanationPopupProps> = ({
  explanation,
  isOpen,
  isCorrect,
  onClose,
  sourceIds = [],
}) => {
  const [showSources, setShowSources] = useState(false);

  if (!isOpen) return null;

  const relevantSources = sourceIds && sourceIds.length > 0
    ? sources.filter(source => sourceIds.includes(source.id))
    : sources; // Zeige alle verfügbaren Quellen als Fallback

  const sourceTypeEmoji: Record<string, string> = {
    youtube: '📺',
    podcast: '🎧',
    website: '🌐',
    article: '📄'
  };

  return (
    <div 
      className={`explanation-popup ${isOpen ? 'visible' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="explanation-title"
    >
      <div className="explanation-popup__content">
        <div className="explanation-header">
          <h2 id="explanation-title">
            {isCorrect ? 'Richtig!' : 'Nicht ganz...'}
          </h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Schließen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={`explanation-body ${showSources ? 'show-sources' : ''}`}>
          <div 
            className={`explanation-text ${showSources ? 'hidden' : ''}`}
            aria-hidden={showSources}
          >
            <p>{explanation}</p>
          </div>

          <div className="sources-container">
            <button 
              className="more-info-button"
              onClick={() => setShowSources(!showSources)}
              aria-expanded={showSources}
            >
              {showSources ? 'Zurück zur Erklärung ←' : 'Mehr erfahren →'}
            </button>

            {showSources && (
              <div 
                className="sources-section"
                role="region"
                aria-label="Weitere Ressourcen"
              >
                <h3>Weitere Bitcoin Ressourcen:</h3>
                <ul className="sources-list">
                  {relevantSources.map(source => (
                    <li key={source.id} className="source-item">
                      <a 
                        href={source.resources[0].url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="source-link"
                        aria-label={`${source.name}: ${source.description}`}
                      >
                        <div className="source-info">
                          <span className="source-name">{source.name}</span>
                          <span className="source-description">
                            {source.description}
                          </span>
                        </div>
                        <span className="source-type-icon" aria-hidden="true">
                          {sourceTypeEmoji[source.type] || '📄'}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="explanation-controls">
            <SpeakerButton text={explanation} />
          </div>
        </div>
      </div>
    </div>
  );
};
