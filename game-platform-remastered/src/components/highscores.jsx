import React, { useState, useEffect } from 'react';
import { getAllScores } from '../utilities/services';
import { filterBestScores } from '../utilities/utilities';
import { Score } from './score';

export const Highscores = props => {
  const [bestScores, setBestScores] = useState([]);
  useEffect(() => {
    getAllScores()
    .then(res => {
      if(res.success) {
        let bestScores = filterBestScores(res.data, 10);
        setBestScores(bestScores);
      }
    })
  }, []);
  return (
    <div className="highscores">
      {
        bestScores.map(scoreData => <Score key={scoreData.score_id} scoreData={scoreData} />)
      }
    </div>
  );
}