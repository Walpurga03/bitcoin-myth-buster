import { useState, useEffect } from 'react';
import { Question } from './components/Question/Question';
import { ExplanationPopup } from './components/ExplanationPopup/ExplanationPopup';
import StartAnimation from './components/StartAnimation/StartAnimation';
import { EducationalInsight } from './components/EducationalInsight';
import { myths } from './data/myths';
import { initializeButtonEffects } from './utils/buttonEffects';
import './styles/main.scss';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const cleanup = initializeButtonEffects();
    return () => cleanup();
  }, []);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === myths[currentQuestionIndex].isMyth;
    setIsAnswerCorrect(isCorrect);
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    setShowQuote(true);
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
          />
        )}
      </div>
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
