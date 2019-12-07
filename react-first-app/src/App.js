import React from 'react';
import './App.css';
import FirstReactComponent from './components.js/FirstReactComponent';
import SecondReactComponent from './components.js/SecondReactComponent';

const App = () => {
  return (
    <div className="App">
      <FirstReactComponent></FirstReactComponent>
      <SecondReactComponent firstName="Pera" lastName="Peric"></SecondReactComponent>
    </div>
  );
}

export default App;
