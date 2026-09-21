import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/base.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/arcade.css';
import './styles/runner.css';
import './styles/snap.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
