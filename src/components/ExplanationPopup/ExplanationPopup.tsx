import React, { lazy, Suspense } from 'react';
import './ExplanationPopup.scss';

const SpeakerButton = lazy(() => 
  import('../SpeakerButton/SpeakerButton').then(module => ({
    default: module.default
  }))
);

interface ExplanationPopupProps {
  explanation: string;
  isOpen: boolean;
  isCorrect: boolean;
  onClose: () => void;
  link?: string;
}

export const ExplanationPopup: React.FC<ExplanationPopupProps> = ({
  explanation,
  isOpen,
  isCorrect,
  onClose,
  link
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`explanation-popup ${isOpen ? 'visible' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="explanation-title"
    >
      <div className="explanation-popup__content">
      <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Schließen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        <div className="explanation-header">
       
          <h2 id="explanation-title">
            {isCorrect ? 'Richtig!' : 'Nicht ganz...'}
          </h2>
         
        </div>

        <div className="explanation-body">
          <div className="explanation-text">
            <p>{explanation}</p>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="explanation-popup__link"
              >
                Mehr Informationen
              </a>
            )}
          </div>

          <div className="explanation-controls">
            <Suspense fallback={<div className="speaker-loading">Lade...</div>}>
              <SpeakerButton text={explanation} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
