import React, { useState } from 'react';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Highscore } from './components/highscore';
import { Register } from './components/register';
import { Profile } from './components/profile';
import { Login } from './components/login';
import { Gameselect } from './components/gameselect';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  
  let user = {
    user_id: 1,
    name: 'Пера',
    surname: 'Перић',
    username: 'Peraperic',
    email: 'peric@yahoo.com',
    picture: null
  }

  let scores = [
    {
      score_id: 0,
      user_id: 0,
      game: 0,
      score: 100
    },
    {
      score_id: 1,
      user_id: 1,
      game: 0,
      score: 120
    },
    {
      score_id: 2,
      user_id: 0,
      game: 1,
      score: 80
    },
  ];


  return (
    <>
    <Header loggedIn={loggedIn} setState={setLoggedIn} />
    <hr />
    <Highscore scores={scores}/>
    <hr />
    <Register />
    <hr />
    <Login />
    <hr />
    <Profile user={user} />
    <hr />
    <Gameselect />
    <hr />
    <Footer />
    </>
  );
}

export default App;
