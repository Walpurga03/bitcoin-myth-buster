import React, { useState, useEffect } from 'react';
import './Question.scss';

interface QuestionProps {
  questionText: string;
  onAnswer: (answer: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({ questionText, onAnswer }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, [questionText]);

  const handleAnswer = (answer: boolean) => {
    setIsLoaded(false);
    setTimeout(() => onAnswer(answer), 300);
  };

  return (
    <div 
      className={`question-container ${isLoaded ? 'visible' : ''}`}
      role="region"
      aria-label="Bitcoin Frage"
    >
      <h2 
        className="question-text"
        role="heading"
        aria-level={1}
        style={{ 
          willChange: 'transform, opacity',
          contentVisibility: 'auto',
          containIntrinsicSize: '0 50px'
        }}
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
          aria-label="Ja, stimme zu"
        >
          Ja
        </button>
        <button
          className="answer-button no"
          onClick={() => handleAnswer(false)}
          aria-label="Nein, stimme nicht zu"
        >
          Nein
        </button>
      </div>
    </div>
  );
};
