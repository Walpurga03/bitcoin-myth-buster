import React, { useState } from 'react';
import { quotes, Quote } from '../data/quotes';
import '../styles/EducationalInsight.scss';

interface EducationalInsightProps {
  onClose: () => void;
  category?: 'security' | 'history' | 'economics' | 'freedom' | 'technology' | 'all';
}

export const EducationalInsight: React.FC<EducationalInsightProps> = ({ 
  onClose,
  category = 'all'
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getRandomQuote = (): Quote | null => {
    const filteredQuotes = category === 'all' 
      ? quotes 
      : quotes.filter(q => q.category === category);

    if (filteredQuotes.length === 0) return null;
    return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const renderQuote = () => {
    const quote = getRandomQuote();
    if (!quote) return <div className="insight empty">Keine Zitate verfügbar.</div>;

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
            {quote.author !== "----" && (
              <span className="author">- {quote.author}</span>
            )}
            {quote.year && <span className="year">, {quote.year}</span>}
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

export default EducationalInsight;
