import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../utilities/services';

export const Score = ({ scoreData }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(scoreData.user_id)
      .then(res => {
        if (res.success) {
          setUser(res.user);
        }
      })
  }, [scoreData.user_id]);

  return (
    <Link to={`/profile/${user.user_id}`} className="score-link">
      <div className="score">
        <p>Корисничко име: <span>{user.username}</span></p>
        <p>Резултат: <span>{scoreData.score}</span></p>
      </div>
    </Link>
  );
}