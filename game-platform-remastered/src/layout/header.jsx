import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  let userData = JSON.parse(window.localStorage.getItem('user'));
  const [user, setUser] = useState(userData);
  const [content, setContent] = useState(
    <>
      <Link to="/register">Региструј се</Link>
      <Link to="/login">Пријави се</Link>
    </>
    );


  const handleClick = () => {
    window.localStorage.clear();
    userData = JSON.parse(window.localStorage.getItem('user'));
    if(userData !== null || userData !== 'null')
      setUser(userData);
    
  }

  useEffect(()=>{

    if(!((user === null) || (user === 'null'))) {
      setContent(
        <>
          <Link to={`/profile/${user.user_id}`}><img src={user.picture} alt="Слика" /></Link>
          <Link to="/" onClick={handleClick}>Одјави се</Link>
        </>
      );
    } 
  },[user])


  return (
    <header>
      <Link to="/" className="logo-link"><img src="logo.png" alt="лого компаније" /></Link>
      <span>гамер</span>
      {content}
    </header>
  );  
}