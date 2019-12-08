import React, { useState } from 'react';

export const InputForm = ({ placeholder, btnText, onClick }) => {
  const [inputValue, setInputValue] = useState('');
  
  const submit = (e) => {
    if(inputValue.trim() === ''){
      return console.log('FATAL ERROR!');
    }
    onClick(inputValue);
    setInputValue('');
    e.target.parentElement.input.value = '';
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" name="input" placeholder={placeholder} onInput={e => setInputValue(e.target.value)} />
      <input type="submit" value={btnText} onClick={submit} />
    </form>
  );
}