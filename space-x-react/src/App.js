import React from 'react';
import './App.css';
import { PastLList } from './components/past-l-list';
import { UpcomingLList } from './components/upcoming-l-list';

function App() {
  return (
    <div className="App">
      <PastLList />
      <UpcomingLList />
    </div>
  );
}

export default App;
