import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ card,onClick,isFlipped }) => {
    return (
        <Flippy
            isFlipped={isFlipped}
            flipDirection="vertical"
            style={{ width: '120px', height: '120px',margin:'5px',float:'left'}} /// these are optional style, it is not necessary
        >

            <FrontSide
            style={{
              height: '100px',
              width: '100px',
                backgroundColor: '#00000022', border: '2px dashed black', fontSize: '40px', paddingTop: '25px'
            }} onClick={onClick}
            >
            ?
            </FrontSide>
            <BackSide
            style={{ height: '100px',
            width: '100px', backgroundColor: '#00000012', fontSize: '50px', lineHeight: '10px', border: '2px dashed black', paddingLeft: '25px'}}>
            {card.data}
            </BackSide>
        </Flippy>
    )
}

export default Card