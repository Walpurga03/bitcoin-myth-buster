import React from 'react';
import { quotes, Quote } from '../data/quotes';

interface EducationalInsightProps {
  category?: 'security' | 'history' | 'economics' | 'freedom' | 'technology' | 'all';
}

export const EducationalInsight: React.FC<EducationalInsightProps> = ({ 
  category = 'all'
}) => {
  const getRandomQuote = (): Quote | null => {
    const filteredQuotes = category === 'all' 
      ? quotes 
      : quotes.filter(q => q.category === category);

    if (filteredQuotes.length === 0) return null;
    return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  };

  const renderQuote = () => {
    const quote = getRandomQuote();
    if (!quote) return <div className="insight empty">Keine Zitate verfügbar.</div>;

    return (
      <div className="insight quote">
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
      {renderQuote()}
    </div>
  );
};

export default EducationalInsight;
