import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';
import { App } from './App.tsx';

// Use querySelector instead of getElementById
createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
