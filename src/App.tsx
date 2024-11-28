import { useState } from 'react';
import { Question } from './components/Question/Question';
import { ExplanationPopup } from './components/ExplanationPopup/ExplanationPopup';
import StartAnimation from './components/StartAnimation/StartAnimation';
import EndAnimation from './components/EndAnimation/EndAnimation';
import { myths } from './data/myths';
import { quotes } from './data/quotes';
import './styles/main.scss';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const [showEndAnimation, setShowEndAnimation] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === myths[currentQuestionIndex].isMyth;
    setIsAnswerCorrect(isCorrect);
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    setShowQuote(true);
  };

  const handleNextQuestion = () => {
    setShowQuote(false);
    
    // Nächste Frage
    if (currentQuestionIndex < myths.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuoteIndex(currentQuoteIndex + 1);
      setShowExplanation(false);
      setIsAnswerCorrect(false);
    } else {
      setShowEndAnimation(true);
    }
  };

  if (showStartAnimation) {
    return <StartAnimation onComplete={() => setShowStartAnimation(false)} />;
  }

  if (showEndAnimation) {
    return <EndAnimation onComplete={() => {
      setShowEndAnimation(false);
      setCurrentQuestionIndex(0);
      setCurrentQuoteIndex(0);
    }} />;
  }

  const currentQuestion = myths[currentQuestionIndex];
  const currentQuote = quotes[currentQuoteIndex % quotes.length];

  return (
    <div className="app">
      <div className={`app__content ${showQuote ? 'blur-background' : ''}`}>
        <Question
          questionText={currentQuestion.text}
          onAnswer={handleAnswer}
        />
        {showExplanation && (
          <ExplanationPopup
            explanation={currentQuestion.explanation}
            isOpen={showExplanation}
            isCorrect={isAnswerCorrect}
            onClose={handleCloseExplanation}
          />
        )}
      </div>
      {showQuote && currentQuote && (
        <>
          <div className="overlay" />
          <div className="quote-container">
            <div className="quote-box">
              <p className="quote-text">{currentQuote.text}</p>
              <p className="quote-author">- {currentQuote.author}</p>
              <button onClick={handleNextQuestion} className="next-button">
                Weiter
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
