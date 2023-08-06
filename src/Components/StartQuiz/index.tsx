import * as Icons from 'react-icons/fa'; // Import react-icons/fa
import { QuizContext } from '../../Context/QuizProvider';

// StartQuiz component displays a button to start the quiz
const StartQuiz = () => {
  const { dispatch } = QuizContext();

  // Handle start quiz button click
  const handleStartQuiz = () => {
    dispatch({ type: 'start' });
  };

  return (
    <section className="flex">
      {/* Button to start the quiz */}
      <button
        onClick={handleStartQuiz}
        type="button"
        className="w-full space-x-2 text-lg capitalize justify-center rounded-md px-5 py-2.5 font-medium  items-center flex relative flex-row bg-gradient-to-r 
dark:from-cyan-500 dark:to-blue-500 dark:hover:from-green-500 dark:hover:to-cyan-500
from-blue-400 to-cyan-500 hover:from-green-400 hover:to-cyan-400"
      >
        <span>start quiz</span>
        <Icons.FaReact /> {/* React icon */}
      </button>
    </section>
  );
};

export default StartQuiz;
