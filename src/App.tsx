import { useState, useEffect } from 'react';
import { Question } from './components/Question/Question';
import { ExplanationPopup } from './components/ExplanationPopup/ExplanationPopup';
import StartAnimation from './components/StartAnimation/StartAnimation';
import { EducationalInsight } from './components/EducationalInsight';
import { myths } from './data/myths';
import { initializeButtonEffects } from './utils/buttonEffects';
import './styles/main.scss';
import './styles/EducationalInsight.scss';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const [showInsight, setShowInsight] = useState(false);

  useEffect(() => {
    const cleanup = initializeButtonEffects();
    return () => cleanup();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showInsight) {
      timer = setTimeout(() => {
        setShowInsight(false);
        setCurrentQuestionIndex((prev) => 
          prev < myths.length - 1 ? prev + 1 : 0
        );
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showInsight]);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === myths[currentQuestionIndex].isMyth;
    setIsAnswerCorrect(isCorrect);
    setShowExplanation(true);
  };

  const handleClosePopup = () => {
    setShowExplanation(false);
    setShowInsight(true);
  };

  if (showStartAnimation) {
    return <StartAnimation onComplete={() => setShowStartAnimation(false)} />;
  }

  return (
    <div className="app">
      <div className={`app__content ${showInsight ? 'blur-background' : ''}`}>
        <Question
          questionText={myths[currentQuestionIndex].text}
          onAnswer={handleAnswer}
        />
        {showExplanation && (
          <ExplanationPopup
            explanation={myths[currentQuestionIndex].explanation}
            isOpen={showExplanation}
            isCorrect={isAnswerCorrect}
            onClose={handleClosePopup}
          />
        )}
      </div>
      {showInsight && (
        <>
          <div className="overlay" />
          <div className="insight-popup">
            <EducationalInsight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
