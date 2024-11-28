import React from 'react';
import { SpeakerButton } from '../SpeakerButton/SpeakerButton';
import './ExplanationPopup.scss';

interface ExplanationPopupProps {
  explanation: string;
  isOpen: boolean;
  isCorrect: boolean;
  onClose: () => void;
}

export const ExplanationPopup: React.FC<ExplanationPopupProps> = ({
  explanation,
  isOpen,
  isCorrect,
  onClose,
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

        <div className="explanation-body">
          <div className="explanation-text">
            <p>{explanation}</p>
          </div>

          <div className="explanation-controls">
            <SpeakerButton text={explanation} />
          </div>
        </div>
      </div>
    </div>
  );
};
