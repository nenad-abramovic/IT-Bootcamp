import React, { useState, useEffect } from 'react';
import { getUser } from '../utilities/services';

export const Profile = (props) => {
  const userID = props.match.params.id;
  const [userData, setUserData] = useState({user_id: undefined}); 
  const [user, setUser] = useState({});
  const [isEditable, setIsEditable] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    getUser(userID)
      .then(res => {
        if (res.success) {
          setUser(res.user);
          setEditedUser(res.user);
          console.log(JSON.parse(window.localStorage.getItem('user')));
          setUserData(JSON.parse(window.localStorage.getItem('user')));
        }
      })
  }, []);

  const handleClick = (e) => {
    if(!isEditable)
      setIsEditable(!isEditable);
    if(isEditable){
      e.preventDefault();
      if(e.target.parentElement.checkValidity()){
        setUser(editedUser);
        setIsEditable(!isEditable);
        window.localStorage.setItem('user', JSON.stringify(user));
      }
    }
  }

  if(isEditable) {
    return (
      <div className="profile">
        <form>
        <p>Име: <input type="text" onChange={e => setEditedUser({...editedUser, name: e.target.value})} value={editedUser.name} placeholder={user.name}/></p> 
        <p>Презиме: <input type="text" onChange={e => setEditedUser({...editedUser, surname: e.target.value})} value={editedUser.surname} placeholder={user.surname}/></p>  
        <p>Корисничко име: <input type="text" onChange={e => setEditedUser({...editedUser, username: e.target.value})} value={editedUser.username} placeholder={user.username}/></p>  
        <p>Имејл: <input type="email" onChange={e => setEditedUser({...editedUser, email: e.target.value})} value={editedUser.email} placeholder={user.email}/></p>  
        <img src={user.picture} alt="Слика" />
        <button onClick={handleClick}>Сачувај измене</button>
        </form>
      </div>  
    );
  } else {
    return (
      <div className="profile">
        <p>Име: {user.name}</p> 
        <p>Презиме: {user.surname}</p>  
        <p>Корисничко име: {user.username}</p>  
        <p>Имејл: {user.email}</p>  
        <img src={user.picture} alt="Слика" />
        {user.user_id === userData.user_id ? <button onClick={handleClick}>Измени</button> : ''}
      </div>  
    );
  }
} 