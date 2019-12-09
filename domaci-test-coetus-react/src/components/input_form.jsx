import React, { useState } from 'react';

export const InputForm = ({ placeholder, btnText, onClick, message }) => {
  const [inputValue, setInputValue] = useState('');
  const [txtMsg, settxtMsg] = useState(message);
  
  const submit = (e) => {
    if(inputValue.trim() === ''){
      return settxtMsg('FATAL ERROR!');
    }
    onClick(inputValue);
    setInputValue('');
    e.target.parentElement.input.value = '';
    settxtMsg('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" name="input" placeholder={placeholder} onInput={e => setInputValue(e.target.value.trim())} />
      <input type="submit" value={btnText} onClick={submit} />
      <br />
      <p>{txtMsg}</p>
    </form>
  );
}