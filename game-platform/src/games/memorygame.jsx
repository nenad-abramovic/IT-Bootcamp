import React, { useState, useEffect } from 'react';
import { Card } from './components/card';
import { getCards, sendPoints } from '../utilities/services';
import { withRouter } from 'react-router-dom';

const MemoryGame = props => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards()
            .then(data => {
                let copy = [...data.data, ...data.data];
                setCards(shuffle(copy));
            });
    }, []);

    function shuffle(a) {
        return a.sort(() => 0.5 - Math.random());
    }

    if (cards.length === cards.filter(x => x.matched).length && cards.length !== 0) {
        sendPoints(props.match.params.id, 999999999999, 0)
            .then(data => console.log('Браво'));
        let tmp = [...cards];
        tmp = tmp.map(x => {
            return { ...x, matched: false };
        });
        setCards(tmp);
    }

    const [selected, setSelected] = useState([]);
    const [matched, setMatched] = useState([]);

    const onClick = (idx) => {
        if(selected.length === 0) {
            setSelected([idx]);
        }
        else if (selected.length === 1) {
            if(cards[selected[0]].data === cards[idx].data) {
                setMatched(matched.concat(selected[0], idx));
                setSelected([]);
            } else {
                setSelected([selected[0], idx]);
                setTimeout(() => {
                    setSelected([])
                }, 850);
            }
        }
        }
    return (
        <div style={{ position: 'relative' }}>
            {
                cards.map((card, idx) => <Card key={idx} card={card} onClick={() => onClick(idx)} />)
            }
            {/* {
                cards.every(x => x.matched) ? <div style={{ height: '100%', lineHeight: '100px', position: 'absolute', top: '210px', fontSize: '80px', color: 'red' }}>БРАВОоОоО!!!</div> : <div></div>
            } */}
        </div>
    );
}

export default withRouter(MemoryGame);