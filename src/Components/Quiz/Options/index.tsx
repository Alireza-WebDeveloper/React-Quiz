import React from 'react';
import { QuizContext } from '../../../Context/QuizProvider';

// Define the Props interface for the Options component
interface OptionsProps {
  selectOption?: number;
  handleSelectOption(index: number): void;
}

// Options component that displays multiple choice options for a question
const Options: React.FC<OptionsProps> = ({
  selectOption,
  handleSelectOption,
}) => {
  // Get the questions and index from the QuizContext
  const { questions, index } = QuizContext();

  return (
    <>
      {questions[index].options.map((option, index) => {
        return (
          <button
            onClick={() => handleSelectOption(index)}
            key={index}
            type="button"
            className={`w-full space-x-2 text-lg capitalize justify-center rounded-md px-5 py-2.5 font-medium  items-center flex relative flex-row bg-gradient-to-r ${
              selectOption === index + 1
                ? 'dark:from-red-500 dark:to-red-500 dark:hover:from-green-500   dark:hover:to-red-500 from-orange-400 to-red-500 hover:from-green-400  hover:to-cyan-400'
                : 'dark:from-cyan-500 dark:to-blue-500 dark:hover:from-green-500   dark:hover:to-cyan-500 from-blue-400 to-cyan-500 hover:from-green-400  hover:to-cyan-400'
            }`}
          >
            <span>{option}</span>
          </button>
        );
      })}
    </>
  );
};

export default Options;
