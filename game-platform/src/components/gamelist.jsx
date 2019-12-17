import React from 'react';
import { MemoryGame } from '../games/memorygame';

export const GameList = ({ games }) => {
    return (
        // games.map(game => <li>game.name</li>)
        <MemoryGame />
    );
}