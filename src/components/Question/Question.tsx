import React, { useState, useEffect } from 'react';
import './Question.scss';

interface QuestionProps {
  questionText: string;
  onAnswer: (answer: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({ questionText, onAnswer }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--x', `${x}%`);
    button.style.setProperty('--y', `${y}%`);
  };

  const handleAnswer = (answer: boolean) => {
    setIsVisible(false);
    setTimeout(() => onAnswer(answer), 300);
  };

  return (
    <div 
      className={`question-container ${isVisible ? 'visible' : ''}`}
      role="region"
      aria-label="Bitcoin Frage"
    >
      <h2 
        className="question-text"
        role="heading"
      >
        {questionText}
      </h2>
      <div 
        className="answer-buttons"
        role="group"
        aria-label="Antwortmöglichkeiten"
      >
        <button
          className="answer-button yes"
          onClick={() => handleAnswer(true)}
          onMouseMove={handleMouseMove}
          onFocus={(e) => e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'}
          onBlur={(e) => e.currentTarget.style.transform = ''}
          aria-label="Ja, stimme zu"
        >
          Ja
        </button>
        <button
          className="answer-button no"
          onClick={() => handleAnswer(false)}
          onMouseMove={handleMouseMove}
          onFocus={(e) => e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'}
          onBlur={(e) => e.currentTarget.style.transform = ''}
          aria-label="Nein, stimme nicht zu"
        >
          Nein
        </button>
      </div>
    </div>
  );
};
