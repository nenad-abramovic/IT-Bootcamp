import React from 'react';
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
        <button>Регистрација</button>
        <button onClick={e => setState(!loggedIn)}>Пријави се</button>

        </header>
    );
}