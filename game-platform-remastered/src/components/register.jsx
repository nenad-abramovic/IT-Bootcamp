import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { register } from '../utilities/services';

const Register = props => {
  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleClick = (e) => {
    e.preventDefault();
    register(newUser)
      .then(res => {
        if (res.success) {
          props.history.push('/gameselect');
          window.localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
  }

  return (
    <div className="register">
      <form>
        <input
          type="text"
          value={newUser.name}
          placeholder="Име"
          onChange={e => setNewUser({
            ...newUser,
            name: e.target.value
          })}
        />
  <br />
        <input
          type="text"
          value={newUser.surname}
          placeholder="Презиме"
          onChange={e => setNewUser({
            ...newUser,
            surname: e.target.value
          })}
        />
  <br />

        <input
          type="text"
          value={newUser.username}
          placeholder="Корисничко име"
          onChange={e => setNewUser({
            ...newUser,
            username: e.target.value
          })}
        />
  <br />

        <input
          type="email"
          value={newUser.email}
          placeholder="Имејл"
          onChange={e => setNewUser({
            ...newUser,
            email: e.target.value
          })}
        />
  <br />

        <input
          type="password"
          value={newUser.password}
          placeholder="Шифра"
          onChange={e => setNewUser({
            ...newUser,
            password: e.target.value
          })}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
  <br />

        <input
          type="password"
          placeholder="Понови шифру"
          pattern={newUser.password}
        />
  <br />

        <input
          type="submit"
          value="Региструј се"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default withRouter(Register);