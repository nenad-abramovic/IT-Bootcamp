import React from 'react';
import { Message } from './message';

export const MessageList = ({ messages }) => {
  return (
    <section>
      {
        messages.map((message, idx) => <Message key={idx} message={message} />)
      }
    </section>
  );
}