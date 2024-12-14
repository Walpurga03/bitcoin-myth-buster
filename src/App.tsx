import { useState, useMemo, useEffect } from 'react';
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
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Memoize current question and quote to prevent unnecessary re-renders
  const currentQuestion = useMemo(() => myths[currentQuestionIndex], [currentQuestionIndex]);
  const currentQuote = useMemo(() => quotes[currentQuoteIndex % quotes.length], [currentQuoteIndex]);

  // Calculate progress
  const progress = `${currentQuestionIndex + 1}/${myths.length}`;

  // Preload next question and prepare data
  useEffect(() => {
    if (currentQuestionIndex < myths.length - 1) {
      // Preload next question data
      const preloadNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < myths.length) {
          // Create a hidden element to preload text
          const preloadDiv = document.createElement('div');
          preloadDiv.style.display = 'none';
          preloadDiv.textContent = myths[nextIndex].text + myths[nextIndex].explanation;
          document.body.appendChild(preloadDiv);
          
          // Remove after a short delay
          setTimeout(() => {
            document.body.removeChild(preloadDiv);
          }, 100);
        }
      };

      preloadNextQuestion();
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === currentQuestion.isMyth;
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    setShowQuote(true);
  };

  const handleNextQuestion = () => {
    setShowQuote(false);
    
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
    return <EndAnimation 
      onComplete={() => {
        setShowEndAnimation(false);
        setCurrentQuestionIndex(0);
        setCurrentQuoteIndex(0);
        setCorrectAnswers(0);
      }}
      correctAnswers={correctAnswers}
      totalQuestions={myths.length}
    />;
  }

  return (
    <div className="app-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <span>{progress}</span>
      </div>
      <div className="app">
        <div className={`app__content ${showQuote ? 'blur-background' : ''}`}>
          {!showStartAnimation && !showEndAnimation && (
            <Question
              key={currentQuestionIndex}
              questionText={currentQuestion.text}
              onAnswer={handleAnswer}
            />
          )}
          {showExplanation && (
            <ExplanationPopup
              explanation={currentQuestion.explanation}
              isOpen={showExplanation}
              isCorrect={isAnswerCorrect}
              onClose={handleCloseExplanation}
              link={currentQuestion.link}
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
    </div>
  );
}

export default App;
