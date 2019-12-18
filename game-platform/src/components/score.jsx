import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUser } from '../utilities/services';

export const Score = ({ score }) => {
    // TODO Dohvatanje username-a na osnovu user_id
    // let user = getUserName(score.user_id)
    const [user, setUser] = useState('');

    useEffect(() => {
        getUser(score.user_id)
            .then(data => {
                if(data.success === true) {
                setUser(data.user);
                }
            });
    }, [score]);

    return (
        <li>
            <Link to={`/profile/${user.user_id}`} >{score.score} {user.username}</Link>
        </li>
    );
}