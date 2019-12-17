import React, { useState, useEffect } from 'react';
import { Card } from './components/card';

export const MemoryGame = () => {
    const cards = [
        {
            id: 0, 
            data: 'nesto1'
        },
        {
            id: 1, 
            data: 'nesto2'
        },
        {
            id: 2, 
            data: 'nesto3'
        },
        {
            id: 3, 
            data: 'nesto4'
        },
        {
            id: 4, 
            data: 'nesto5'
        },
    ];
    const copy = [...cards, ...cards];
    function shuffle(a) {
        return copy.sort(x => 0.5 - Math.random());
    }

    const [displayCards] = useState(shuffle(copy));
    const [isSelected, setIsSelected] = useState(Array(copy.length).fill(false));
    const [flipped, setFlipped] = useState([]);

    function select(idx) {
        let tmp = [...isSelected];
        tmp[idx] = true;
        setIsSelected(tmp);
        setInterval(() => {
            tmp[idx] = false;
            setIsSelected(tmp);
        }, 2000);
        console.log(tmp);
    }

    return (
        <div>
        {
            displayCards.map((card, idx) => <Card key={idx} isFlipped={isSelected[idx]} card={card} onClick={() => select(idx)} />)
        }
        </div>
    );
}