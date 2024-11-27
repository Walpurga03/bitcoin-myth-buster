import { useState, useEffect } from 'react';
import { Question } from './components/Question/Question';
import { ExplanationPopup } from './components/ExplanationPopup/ExplanationPopup';
import StartAnimation from './components/StartAnimation/StartAnimation';
import { EducationalInsight } from './components/EducationalInsight';
import { myths } from './data/myths';
import { quotes, Quote } from './data/quotes';
import { initializeButtonEffects } from './utils/buttonEffects';
import './styles/main.scss';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const [showQuote, setShowQuote] = useState(false);
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [displayedQuotes, setDisplayedQuotes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const cleanup = initializeButtonEffects();
    return () => cleanup();
  }, []);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === myths[currentQuestionIndex].isMyth;
    setIsAnswerCorrect(isCorrect);
    setShowExplanation(true);
    setRandomQuote(getRandomQuote());
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    setShowQuote(true);
  };

  const getRandomQuote = () => {
    if (displayedQuotes.size === quotes.length) {
      // Alle Zitate wurden angezeigt, zurücksetzen
      setDisplayedQuotes(new Set());
    }

    let randomIndex;
    let randomQuote;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
      randomQuote = quotes[randomIndex];
    } while (displayedQuotes.has(randomQuote.id));

    // Füge das Zitat zu den angezeigten Zitaten hinzu
    setDisplayedQuotes(prev => new Set(prev).add(randomQuote.id));

    return randomQuote;
  };

  if (showStartAnimation) {
    return <StartAnimation onComplete={() => setShowStartAnimation(false)} />;
  }

  return (
    <div className="app">
      <div className={`app__content ${showQuote ? 'blur-background' : ''}`}>
        <Question
          questionText={myths[currentQuestionIndex].text}
          onAnswer={handleAnswer}
        />
        {showExplanation && (
          <ExplanationPopup
            explanation={myths[currentQuestionIndex].explanation}
            isOpen={showExplanation}
            isCorrect={isAnswerCorrect}
            onClose={handleCloseExplanation}
            sourceIds={myths[currentQuestionIndex].sourceIds}
          />
        )}
      </div>
      {showQuote && randomQuote && (
        <div className="quote-display">
          <p>{randomQuote.text}</p>
          <p>- {randomQuote.author}</p>
        </div>
      )}
      {showQuote && (
        <>
          <div className="overlay" />
          <button onClick={() => setShowQuote(false)} className="close-quote">Close Quote</button>
        </>
      )}
      {showQuote && (
        <>
          <div className="overlay" />
          <div className="insight-popup">
            <EducationalInsight onClose={() => {
              setShowQuote(false);
              setCurrentQuestionIndex(prev => prev < myths.length - 1 ? prev + 1 : 0);
            }} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
