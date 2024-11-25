import React from 'react';
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
        <h2>{isCorrect ? "Richtig!" : "Falsch!"}</h2>
        <p>{explanation}</p>
        <button onClick={onClose}>Weiter</button>
      </div>
    </div>
  );
};
