import React, { createContext, useContext, useEffect } from 'react';
import { QuizProviderProps, QuizStateType, ActionType } from './Types';
import { useImmerReducer } from 'use-immer';
import { quizData } from '../Data';

// InitialState
const initialState: QuizStateType = {
  quizTitle: '',
  questions: [],
  score: 0,
  index: 0,
  active: false,
  end: false,
  currenAnswer: undefined,
  dispatch: (action: ActionType) => {
    // Implementation of dispatch function
  },
};

// Reducer
const reducer = (state: QuizStateType, action: ActionType) => {
  switch (action.type) {
    case 'ready':
      state.quizTitle = action.payload.quizTitle;
      state.questions = action.payload.questions;
      break;
    case 'start':
      state.active = true;
      state.currenAnswer = state.questions[state.index].answer;
      break;
    case 'next':
      console.log(`${state.currenAnswer} , ${action.payload}`);
      if (state.currenAnswer === action.payload) {
        state.score += 1;
      }
      if (state.questions.length - 1 === state.index) {
        state.end = true;
        state.active = false;
      } else {
        state.index += 1;
      }
      break;
    default:
      return state;
  }
};

/// Context
const Context = createContext<QuizStateType>(initialState);

// Provider
const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  // Fetch Data
  useEffect(() => {
    dispatch({ type: 'ready', payload: quizData });
  }, []);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

// Context
const QuizContext = () => useContext(Context);

export { QuizProvider, QuizContext };
