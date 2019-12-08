import React from 'react';

export const Message = ({ message }) => {
  let datetime = new Date(message.timestamp);
  let time = datetime.toLocaleTimeString('sr-Cyrl', { hour12: true });

  return (
    <div>
      <p>Author: {message.username}</p>
      <p>{message.message}</p>
      <p>{time}</p>
    </div>
  );
}