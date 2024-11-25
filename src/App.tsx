import { useState, useEffect } from 'react';
import { Question } from './components/Question/Question';
import { ExplanationPopup } from './components/ExplanationPopup/ExplanationPopup';
import { myths } from './data/myths';
import { initializeButtonEffects } from './utils/buttonEffects';
import './styles/main.scss';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    const cleanup = initializeButtonEffects();
    return () => cleanup();
  }, []);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === myths[currentQuestionIndex].isMyth;
    setIsAnswerCorrect(isCorrect);
    setShowExplanation(true);
  };

  const handleClosePopup = () => {
    setShowExplanation(false);
    setCurrentQuestionIndex((prev) => 
      prev < myths.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="app">
      <div className="app__content">
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
    </div>
  );
}

export default App;
