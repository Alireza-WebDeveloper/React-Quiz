import React, { useEffect, useContext } from 'react';
import Quiz from '../../Components/Quiz';
import StartQuiz from '../../Components/StartQuiz';
import EndQuiz from '../../Components/EndQuiz';
import { QuizContext } from '../../Context/QuizProvider';

const HomePage = () => {
  // Retrieve context values using useContext hook
  const { active, end, score } = QuizContext();

  // Log the score whenever 'end' changes
  useEffect(() => {
    console.log(score);
  }, [end]);

  // Determine which component to render based on conditions
  let content;
  if (!active && !end) {
    content = <StartQuiz />;
  } else if (active && !end) {
    content = <Quiz />;
  } else if (!active && end) {
    content = <EndQuiz />;
  } else {
    content = null; // No component to render in this case
  }

  return (
    // Center-align and display the selected content
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto container">
      {content}
    </div>
  );
};

export default HomePage;
