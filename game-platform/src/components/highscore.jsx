import React, { useState, useEffect } from 'react';
import { Score } from './score';
import { getTop10Users } from '../utilities/services';

export const Highscore = ({ setUser }) => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        getTop10Users()
            .then(top10 => {
                console.log('a', top10);
                setScores(top10)});
    }, []);

    return (
        <ol>
            {
                scores.map(score => <Score key={score.score_id} score={score} setState={setUser} />)
            }
        </ol>
    );
}