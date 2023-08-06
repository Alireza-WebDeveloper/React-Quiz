// Represents a single question in the quiz
export interface QuizQuestionType {
  question: string; // The question text
  answer: string; // The correct answer for the question
  options: string[]; // Multiple choice options for the question
}

// Represents the state of the quiz
export interface QuizStateType {
  quizTitle: string; // The title of the quiz
  questions: QuizQuestionType[]; // List of questions in the quiz
  currenAnswer?: string; // The currently selected answer (optional)
  score: number; // The current score of the quiz
  index: number; // The index of the current question
  active: boolean; // Whether the quiz is currently active
  end: boolean; // Whether the quiz has ended
  dispatch: React.Dispatch<ActionType>; // Dispatcher function for state updates
}

// Props for the QuizProvider component
export interface QuizProviderProps {
  children: React.ReactNode; // Child elements to wrap within the provider
}

// Represents the possible action types for state updates
export interface ActionType {
  type: 'start' | 'ready' | 'next'; // Action types
  payload?: any; // Optional payload for the action
}
