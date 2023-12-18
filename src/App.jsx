import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';

import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="header">MSR</header>

      <Hero />

      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
