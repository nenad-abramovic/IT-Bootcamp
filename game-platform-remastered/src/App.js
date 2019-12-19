import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './layout/header';
import { Content } from './layout/content';
import { Footer } from './layout/footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
