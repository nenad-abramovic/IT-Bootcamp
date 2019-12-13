import React from 'react'
import { Traits } from './traits';

export const Character = ({ character }) => {
    return (
        <div className="character">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${character.id}.png`} alt={character.name} />
            <p className="name">{character.first_name} {character.last_name}</p>
            <p className="age">Године: {character.age}</p>
            <p className="gender">Пол: {character.gender}</p>
            <p className="race">Раса: {character.race}</p>
            <Traits traits={character.traits} />
        </div>
    );
}