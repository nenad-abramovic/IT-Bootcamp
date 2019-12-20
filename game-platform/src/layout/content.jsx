import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Highscore } from '../components/highscore';
import Login from '../components/login';
import Register from '../components/register';
import Memorygame from '../games/memorygame';
import { Profile } from '../components/profile';

const Content = ({ setUser }) => {
    return (
        <Switch>
            <Route exact path="/" component={Highscore} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={() => <Login setState={setUser} />} />
            <Route path="/profile" component={Profile} />
            <Route path="/memorygame" component={Memorygame} />
        </Switch>
    );
}

export { Content };