import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Highscores } from '../components/highscores';
import { Profile } from '../components/profile';
import Register from '../components/register';
import Login from '../components/login';
import { MemoryGame } from '../games/memorygame';
import { IgraPoZelji } from '../games/igrapozelji';
import { GameSelect } from '../components/gameselect';

export const Content = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Highscores} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/gameselect" component={GameSelect} />
        <Route path="/memorygame" component={MemoryGame} />
        <Route path="/igrapozelji" component={IgraPoZelji} />
      </Switch>
    </main>
  );  
}