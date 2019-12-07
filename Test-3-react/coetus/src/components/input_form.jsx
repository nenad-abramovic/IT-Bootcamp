import React, { useState } from 'react';

export const InputForm = (props) => {
  const [input, setInput] = useState('');
  return (
    <div className="input-form">
      <label htmlFor="txt-input"></label>
      <input type="text" placeholder={props.placeholder} id="txt-input" onInput={setInput(e.target.value)} />
      <button onClick={() => props.btnClick(input)}>{props.btnText}</button>
    </div>
  );
}