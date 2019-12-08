import React, { useState } from 'react';

export const InputForm = ({ placeholder, btnText, onClick }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <input type="text" placeholder={placeholder} onInput={(e) => setInputValue(e.target.value)} />
      <button onClick={() => onClick(inputValue)}>{btnText}</button>
    </div>
  );
}