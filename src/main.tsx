import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/heebo';
import '@fontsource/gveret-levin';
import App from '@/App';
import '@/index.css';

const root = document.getElementById('root');

if (!root) throw new Error('Root element was not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
