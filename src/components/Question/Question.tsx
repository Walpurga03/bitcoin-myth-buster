import React from 'react';
import './Question.scss';

interface QuestionProps {
  questionText: string;
  onAnswer: (answer: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({ questionText, onAnswer }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--x', `${x}%`);
    button.style.setProperty('--y', `${y}%`);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">
        {questionText}
      </h2>
      <div className="answer-buttons">
        <button
          className="answer-button yes"
          onClick={() => onAnswer(true)}
          onMouseMove={handleMouseMove}
        >
          Ja
        </button>
        <button
          className="answer-button no"
          onClick={() => onAnswer(false)}
          onMouseMove={handleMouseMove}
        >
          Nein
        </button>
      </div>
    </div>
  );
};
