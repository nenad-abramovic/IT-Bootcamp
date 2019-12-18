import React, { useState, useEffect } from 'react';
import { getUser } from '../utilities/services';

export const Profile = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(props.match.params.id)
      .then(data => {
        if (data.success === true) {
          setUser(data.user);
        }
      });
  }, [props.match.params.id]);
  return (
    <>
      <p>Име: {user.name}</p>
      <p>Презиме: {user.surname}</p>
      <p>Корисничко име: {user.username}</p>
      <p>Имејл: {user.email}</p>
      <img src={user.picture ? user.picture : ''} alt="user-avatar" />
    </>
  );
}