import React from 'react';
import { Trait } from './trait';

export const Traits = ({ traits }) => {
    return (
        <div className="traits">
            <p className="traits-txt">Трејтс</p>
        {
            Object.keys(traits).map(trait => <Trait key={trait} name={trait} value={traits[trait]} />)
        }
        </div>
    );
}