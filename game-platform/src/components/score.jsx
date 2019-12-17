import React from 'react';

export const Score = ({ score }) => {
    // TODO Dohvatanje username-a na osnovu user_id
    // let user = getUserName(score.user_id)
    
    let user = 'Михаил';
    return (
        <li>
            {score.score} {user}
        </li>
    );
}