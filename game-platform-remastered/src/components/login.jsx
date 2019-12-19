import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../utilities/services';

const Login = props => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  });

  const handleClick = (e) => {
    e.preventDefault();
    login(newUser)
      .then(res => {
        if (res.success) {
          props.history.push('/gameselect');
          window.localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
  }

  return (
    <div className="login">
      <form>
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
        />
  <br />

        <input
          type="submit"
          value="Пријави се"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default withRouter(Login);