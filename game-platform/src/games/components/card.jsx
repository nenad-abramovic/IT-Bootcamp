import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'; 

export const Card = ({ card, onClick, isFlipped }) => {

    return (
        <Flippy
    flipOnClick={true}
    isFlipped={isFlipped}
    flipDirection="horizontal" // horizontal or vertical
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
    onClick={onClick}
      style={{
        backgroundColor: '#41669d',
      }}
    >
      RICK
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      ROCKS
    </BackSide>
  </Flippy>
    );
}