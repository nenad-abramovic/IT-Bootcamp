import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useState } from 'react';

export const Card = ({ card, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Flippy
      isFlipped={isFlipped || card.matched}
      flipDirection="vertical" // horizontal or vertical
      style={{ width: '200px', height: '200px', display: 'inline-block', margin: '10px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        onClick={() => {
          onClick(setIsFlipped);
        }}
        style={{
          backgroundColor: '#41669d',
          textAlign: 'center',
          lineHeight: '50px',
          fontSize: '80px'
        }}
      >
        ?
    </FrontSide>
      <BackSide
        style={{ backgroundColor: '#175852', lineHeight: '180px', textAlign: 'center' }}>
        {card.data}
      </BackSide>
    </Flippy>
  );
}