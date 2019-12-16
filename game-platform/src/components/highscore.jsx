import React from 'react';
import { Score } from './score';

export const Highscore = (props) => {
    return (
        <ol>
        {
            props.scores.map(score => <Score key={score.score_id} score={score} />)
        }
        </ol>
    );
}