import { QuizContext } from '../../Context/QuizProvider';

const EndQuiz = () => {
  // Get score and questions from QuizContext
  const { score, questions } = QuizContext();

  return (
    // Render the end quiz component with user's score and total questions
    <div className="p-5 rounded-lg bg-gray-200 text-center text-2xl">
      Your score: {score} of {questions.length}
    </div>
  );
};

export default EndQuiz;
