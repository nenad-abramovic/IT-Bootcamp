export const filterBestScores = (scores, count) => {
  let sortedScores = scores.sort((a, b) => b.score - a.score);
  let bestScores = sortedScores.slice(0, count);
  return bestScores;
}