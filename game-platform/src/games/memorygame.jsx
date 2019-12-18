import React, { useState, useEffect } from 'react';
import { Card } from './components/card';
import { getCards, sendPoints } from '../utilities/services';
import { withRouter } from 'react-router-dom';

const MemoryGame = props => {

    useEffect(() => {
        getCards()
            .then(data => {
                let copy = [...data.data, ...data.data];
                copy = copy.map(x => {
                    return {
                        ...x,
                        matched: false,
                        timeout: undefined
                    }
                });
                setDisplayCards(shuffle(copy));
            });
    }, []);
    // const cards = [
    //     {
    //         id: 0,
    //         data: 'nesto1'
    //     },
    //     {
    //         id: 1,
    //         data: 'nesto2'
    //     },
    //     {
    //         id: 2,
    //         data: 'nesto3'
    //     },
    //     {
    //         id: 3,
    //         data: 'nesto4'
    //     },
    //     {
    //         id: 4,
    //         data: 'nesto5'
    //     },
    // ];

    function shuffle(a) {
        return a.sort(x => 0.5 - Math.random());
    }
    const [displayCards, setDisplayCards] = useState([]);

    if (displayCards.length === displayCards.filter(x => x.matched).length && displayCards.length !== 0) {
        sendPoints(props.match.params.id, 999999999999, 0)
            .then(data => console.log('Браво'));
        let tmp = [...displayCards];
        tmp = tmp.map(x => {
            return { ...x, matched: false };
        });
        setDisplayCards(tmp);
    }


    const onClick = (idx) => {
        return (setState) => {
            let x = displayCards.filter(card => card.timeout !== undefined).length;
            let tmp = [...displayCards];
            console.log(tmp);

            if (x === 0 && !tmp[idx].matched) {
                setState(true);
                tmp[idx] = {
                    ...tmp[idx],
                    timeout: setTimeout(() => { setState(false); tmp[idx].timeout = undefined }, 2000)
                }
                setDisplayCards(tmp);
            } else if (x === 1 && !tmp[idx].matched) {
                setState(true);
                tmp[idx] = {
                    ...tmp[idx],
                    timeout: setTimeout(() => { setState(false); tmp[idx].timeout = undefined }, 2000)
                }
                if (tmp.filter(y => y.timeout !== undefined).length > 1) {
                    let z = tmp.filter(y => y.timeout !== undefined);
                    if (z[0].data === z[1].data) {
                        tmp = tmp.map(y => {
                            if (y.timeout !== undefined) {
                                return { ...y, matched: true, timeout: undefined };
                            } else {
                                setState(false);
                                return { ...y, timeout: undefined }
                            }
                        });
                        setDisplayCards(tmp);
                    }
                }
            }
            // if (selected[0] === -1) {
            //     setSelected([idx, -1]);
            //     setState(true);
            // } else if (selected[1] === -1) {
            //     setState(true);
            //     if (selected[0] !== idx) {
            //         if (displayCards[selected[0]].data === displayCards[idx].data) {
            //             let tmp = [...displayCards];
            //             tmp[selected[0]].matched = tmp[idx].matched = true;
            //             setDisplayCards(tmp);
            //             setSelected([-1, -1]);
            //         } else {
            //             setSelected([selected[0], idx]);
            //         }
            //     }
            // }
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            {
                displayCards.map((card, idx) => <Card key={idx} card={card} onClick={onClick(idx)} />)
            }
            {/* {
                displayCards.every(x => x.matched) ? <div style={{ height: '100%', lineHeight: '100px', position: 'absolute', top: '210px', fontSize: '80px', color: 'red' }}>БРАВОоОоО!!!</div> : <div></div>
            } */}
        </div>
    );
}

export default withRouter(MemoryGame);