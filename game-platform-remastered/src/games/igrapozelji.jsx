import React, { useState, useEffect } from 'react';

export const IgraPoZelji = props => {
  const [buttons, setButtons] = useState(Array(10));
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  
  let a = [];
  for (let i = 0; i < buttons.length; i++) {
    a[i] = <div key={i} style={{
      position: 'absolute',
      top: `${250 - Math.sin(i * Math.PI / 5) * 200}px`,
      left: `${250 - Math.cos(i * Math.PI / 5) * 200}px`
    }}></div>;
  }

  useEffect(() => {
    for (let i = 0; i < buttons.length; i++) {
      a[i] = <div key={i} style={{
        position: 'absolute',
        top: `${250 - Math.sin(i * 2 * Math.PI / buttons.length) * 200}px`,
        left: `${250 - Math.cos(i * 2 * Math.PI / buttons.length) * 200}px`
      }}></div>;
    }
    setButtons(a);
  }, [endTime]);

  const handleClick = (i) => {
    a = [...buttons];
    a.splice(i, 1);
    setButtons(a);
    setEndTime(new Date());
    setTime(time + (endTime - startTime));
    console.log('a', time);
  } 

  useEffect(() => {
    console.log('aaaa');
    if(buttons.length > 0){
    
    let t = 1000 + 2000 * Math.random();
    for (let i = 0; i < buttons.length; i++) {
      a[i] = <div key={i} style={{
        position: 'absolute',
        top: `${250 - Math.sin(i * 2 * Math.PI / buttons.length) * 200}px`,
        left: `${250 - Math.cos(i * 2 * Math.PI / buttons.length) * 200}px`
      }}></div>;
    }
    setButtons(a);
    setTimeout(() => {
      let i = Math.floor(Math.random() * buttons.length);
      a[i] = <div key={i} style={{
        backgroundColor: 'red', position: 'absolute',
        top: `${250 - Math.sin(i * 2 * Math.PI / buttons.length) * 200}px`,
        left: `${250 - Math.cos(i * 2 * Math.PI / buttons.length) * 200}px`
      }} onClick={() => handleClick(i)}></div>;
      setButtons(a);
      setStartTime(new Date());
    }, t);
  } else {
    console.log('bravoooo');
  }
}, [endTime]);

  

  return (
    <div className="igrapozelji">
      {
        buttons.map(i => i)
      }
    </div>
  );
}