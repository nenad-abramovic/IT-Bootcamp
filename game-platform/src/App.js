import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Highscore } from './components/highscore';
import Register from './components/register';
import { Profile } from './components/profile';
import Login from './components/login';
import { Gameselect } from './components/gameselect';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let routes;

  if (loggedIn) {
    routes =
      <>
        <Route exact path="/" component={Highscore} />
        <Route exact path="/register">
          <Register setState={setLoggedIn} />
        </Route>
        <Route exact path="/login">
          <Login setState={setLoggedIn} />
        </Route>
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/gameselect/:id" component={Gameselect} />
      </>
  } else {
    routes = 
      <>
        <Route exact path="/" component={Highscore} />
        <Route exact path="/register">
          <Register setState={setLoggedIn} />
        </Route>
        <Route exact path="/login">
          <Login setState={setLoggedIn} />
        </Route>
        <Route exact path="/profile/:id" component={Profile} />
      </>
  }

  return (
    <Router>
      <Header loggedIn={loggedIn} setState={setLoggedIn} />
      <Switch>
        {
          routes
        }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
