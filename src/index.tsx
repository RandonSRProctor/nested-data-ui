import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JSONVisualizer from './JSONVisualizer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <JSONVisualizer />
  </React.StrictMode>
);
