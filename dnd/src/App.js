import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Content } from './layout/content';
import { Header } from './layout/header';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
