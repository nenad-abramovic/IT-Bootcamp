import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { getMemoryCards } from '../utilities/services';


export const MemoryGame = () => {

    const [cards, setCards] = useState([])
        
    useEffect(() => {
      getMemoryCards()
    .then(data => {
        const copy = [...data.data,...data.data]
        setCards(shuffleArray(copy))
    })},[])
    

    function shuffleArray(cards){
        let tmp = [...cards]
        return tmp.sort(() => 0.5 - Math.random())
    }

    const [selected, setSelected] = useState([])
    const [correct, setCorrect] = useState([])

    const onCardClick = (index) => {
        console.log(index)
        if(selected.length === 0){
            setSelected([index])
        }
        else if(selected.length === 1){
            if(cards[selected[0]].data === cards[index].data){
                console.log("NASAO ISTE")
                setCorrect(correct.concat(selected[0],index))
                setSelected([])
            }
            else{
                console.log("NAPRAVIO TAJMAUT")
                setSelected([selected[0],index])
                setTimeout(() => {
                    setSelected([])
                },850)
            }
        }
    }

    return (
        <div className="memorygame">
            {cards.map((card,index) => {
                return <Card 
                        key={index} 
                        isFlipped={correct.includes(index) || selected.includes(index)} 
                        card={card} 
                        onClick={() => onCardClick(index)} 
                        />
            })}
        </div>
    )

}
