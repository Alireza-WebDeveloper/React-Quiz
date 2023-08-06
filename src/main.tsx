import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QuizProvider } from './Context/QuizProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
