import React from 'react';
import { InputForm } from '../components/input_form';
import username from '../utilities/user';

export const Content = () => {
  return (
    <main>
    <InputForm placeholder="Enter username..." btnText="Set User" btnClick={(input) => username = input}></InputForm>
    <InputForm placeholder="Enter message..." btnText="Send" btnClick={() => sendMessage()}></InputForm>
    </main>
  );
}