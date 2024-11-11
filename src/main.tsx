import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';

// Use querySelector instead of getElementById
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
