import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/logo';

export const Header = ({ loggedIn, setState }) => {
    if(loggedIn) {
        return (
        <header>
        <Logo />
        <h1>Гејмер</h1>
        <button onClick={e => setState(!loggedIn)}>Одјави се</button>
        </header>
        );
    }
    return (
        <header>
            <Logo />
        <h1>Гејмер</h1>
        <Link to="/register">Регистрација</Link>
        <Link to="/login">Пријави се</Link>
        </header>
    );
}