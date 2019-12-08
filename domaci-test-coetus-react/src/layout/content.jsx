import React, { useState, useEffect } from 'react';
import { MessageList } from '../components/message_list';
import { InputForm } from '../components/input_form';

export const Content = () => {
  const [user, setUser] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  const getAllMessages = () => {
    fetch('https://coetus.herokuapp.com/api/message')
      .then(response => response.json())
      .then(data => setAllMessages(data.data),
      () => setAllMessages([]));
  }

  const getUserMessages = (username) => {
    return fetch('https://coetus.herokuapp.com/api/message', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        username: username
      })
    })
      .then(response => response.json(),
      () => setUserMessages([]))
      .then(data => setUserMessages(data.messages));
  }

  const sendMessage = (message) => {
    return fetch('https://coetus.herokuapp.com/api/message', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        username: user,
        message: message
      })
    })
      .then(response => response.json())
      .then(() => getAllMessages());
  }

  useEffect(() => getAllMessages(), []);

  return (
    <main>
      <InputForm onClick={setUser} placeholder="Enter username..." btnText="Set User"></InputForm>
      <MessageList messages={allMessages} />
      <InputForm onClick={sendMessage} placeholder="Enter message..." btnText="Send"></InputForm>
      <button onClick={() => getUserMessages(user)}>Get Messages</button>
      <MessageList messages={userMessages} />
    </main>
  );
}