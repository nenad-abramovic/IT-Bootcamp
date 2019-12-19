import React from 'react';
import { Link } from 'react-router-dom';

export const GameList = props => {
  return (
    <div className="gamelist">
      <Link to="/memorygame">Memory Game</Link>
      <Link to="/igrapozelji">Igra po zeji</Link>
    </div>
  );
}