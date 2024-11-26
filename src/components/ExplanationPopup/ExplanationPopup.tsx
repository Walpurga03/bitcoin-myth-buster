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
    <div className="explanation-popup">
      <div className="explanation-popup__content">
        <div className="explanation-header">
          <h2>{isCorrect ? 'Richtig!' : 'Nicht ganz...'}</h2>
          <SpeakerButton text={explanation} />
        </div>
        <p>{explanation}</p>
        <button className="close-button" onClick={onClose}>
          Schließen
        </button>
      </div>
    </div>
  );
};
