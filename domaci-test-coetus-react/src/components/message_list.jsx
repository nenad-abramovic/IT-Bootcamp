import React from 'react';
import { Message } from './message';

export const MessageList = ({ messages }) => {
  return (
    <section onLoad={e => e.target.scrollTop = e.target.scrollHeight}>
      {
        messages.map(message => <Message key={message.id} message={message} />)
      }
    </section>
  );
}