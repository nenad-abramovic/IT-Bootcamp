import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Highscore } from './components/highscore';
import Register from './components/register';
import { Profile } from './components/profile';
import Login from './components/login';
import { Gameselect } from './components/gameselect';
import { Content } from './layout/content';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const user2 = {
    name: 'Pera',
    surname: 'Peric',
    username: 'Peraperic',
    email: 'peric@yahoo.com',
    picture: null
  }

  const [user, setUser] = useState();

  return (
    <Router>
      <Header loggedIn={user} setState={setUser} />
      <Content setUser={setUser} />
      <Footer />
    </Router>
  );
}

export default App;
