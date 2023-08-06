import { useState } from 'react';
import { QuizContext } from '../../Context/QuizProvider';
import Options from './Options';

const Quiz = () => {
  // Retrieve necessary context values and state
  const { questions, index, quizTitle, dispatch } = QuizContext();
  const [selectOption, setSelectOption] = useState<number | undefined>(
    undefined
  );

  // Function to handle option selection
  const handleSelectOption = (index: number): void => {
    setSelectOption(index + 1);
  };

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    if (selectOption) {
      console.log(selectOption);

      // Dispatch the selected option to the context
      const sendOption = questions[index].options[selectOption - 1];
      dispatch({
        type: 'next',
        payload: sendOption,
      });

      // Reset selectOption after a short delay
      setTimeout(() => {
        setSelectOption(undefined);
      }, 100);
    }
  };

  return (
    // Render the quiz component
    <div className="flex flex-col space-y-6 bg-gray-300 rounded-lg p-3 w-full">
      {/* Section displaying question number and quiz title */}
      <section className="flex justify-between items-center">
        <span className="text-2xl">
          Question {index + 1} of {questions.length}
        </span>
        <span className="text-2xl">{quizTitle}</span>
      </section>

      {/* Section displaying the question itself */}
      <section>
        <p className="text-xl">question : {questions[index].question}</p>
      </section>

      {/* Section for rendering answer options */}
      <section className="flex flex-col space-y-4">
        <Options
          selectOption={selectOption}
          handleSelectOption={handleSelectOption}
        />
      </section>

      {/* Section with "Next" button */}
      <section className="inline-flex justify-end">
        {selectOption && (
          <button
            onClick={handleNextQuestion}
            type="button"
            className="rounded-full space-x-2 text-lg capitalize justify-center px-5 py-2.5 font-medium items-center flex relative flex-row bg-gradient-to-r 'dark:from-red-500 dark:to-yellow-500 dark:hover:from-green-500 dark:hover:to-red-500 from-orange-400 to-yellow-500 hover:from-green-400 hover:to-cyan-400"
          >
            <span>next</span>
          </button>
        )}
      </section>
    </div>
  );
};

export default Quiz;
