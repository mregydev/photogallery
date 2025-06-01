import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { SpeedInsights } from '@vercel/speed-insights/react';
import ErrorBoundary from './componenets/ErrorBoundary.tsx';


createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <SpeedInsights />
    </StrictMode>
    ,
  </Router>
);
