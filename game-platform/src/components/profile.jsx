import React from 'react';

export const Profile = ({ user }) => {
    return (
        <>
        <p>{user.name}</p>
        <p>{user.surname}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <img src={user.picture ? user.picture : '' } alt="user-avatar" />
        </>
    );
}