import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';

import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { LanguageStorage } from './contexts/LanguageContext';

function App() {
  return (
    <>
      <LanguageStorage>
        <Header />

        <Hero />

        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </LanguageStorage>
    </>
  );
}

export default App;
