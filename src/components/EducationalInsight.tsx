import React, { useState } from 'react';
import { quotes, Quote } from '../data/quotes';
import '../styles/EducationalInsight.scss';

interface EducationalInsightProps {
  onClose: () => void;
}

export const EducationalInsight: React.FC<EducationalInsightProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const getRandomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const renderQuote = () => {
    const quote = getRandomQuote();

    return (
      <div className={`insight quote ${isVisible ? 'visible' : ''}`}>
        <button className="close-button" onClick={handleClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <blockquote>
          <p>"{quote.text}"</p>
          <footer>
            <span className="author">- {quote.author}</span>
          </footer>
        </blockquote>
      </div>
    );
  };

  return (
    <div className="educational-insight">
      {isVisible && renderQuote()}
    </div>
  );
};
