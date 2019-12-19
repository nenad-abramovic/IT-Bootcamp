import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  let userData = JSON.parse(window.localStorage.getItem('user'));
  const [user, setUser] = useState(userData);

  const handleClick = () => {
    window.localStorage.clear();
    userData = JSON.parse(window.localStorage.getItem('user'));
    setUser(userData);
  }

  let content = ((user === null) || (user === 'null')) ? 
    <>
    <Link to="/register">Региструј се</Link>
    <Link to="/login">Пријави се</Link>
    </>
    :
    <>
    <Link to={`/profile/:${user.user_id}`}><img src={user.picture} alt="Слика" /></Link>
    <Link to="/" onClick={handleClick}>Одјави се</Link>
    </>

  return (
    <header>
      <img src="logo.png" alt="лого компаније" />
      <span>гамер</span>
      {content}
    </header>
  );  
}