import React from 'react';
import { Character } from './character';
import { data } from '../data/data';

export const CharacterList = () => {
    const characters = data;
    return (
        <div className="character-list">
        {
            characters.map(character => <Character key={character.id} character={character}/>)
        }
        </div>
    );
}