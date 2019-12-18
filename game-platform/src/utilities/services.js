const API_URL = 'https://coetus.herokuapp.com/api/gamer';
const SCORES = '/scores';
const USERS = '/users';

export const getTop10Users = () => {
  return fetch(`${API_URL}${SCORES}`)
    .then(res => res.json())
    .then(data => {
      if (data.success === true) {
        let tmp = data.data.sort((a, b) => b.score - a.score);
        return tmp.slice(0, 10);
      }
      return [];
    })
}

export const getUser = (id) => {
  return fetch(`${API_URL}${USERS}/${id}`)
    .then(res => res.json());
}

export const register = (user) => {
  return fetch(`${API_URL}${USERS}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      ...user
    })
  })
    .then(res => res.json());
}

export const login = (email, password) => {
  return fetch(`${API_URL}${USERS}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => res.json());
}

export const getCards = () => {
  return fetch(`${API_URL}/memory/cards`)
    .then(res => res.json());
}

export const sendPoints = (user_id, score, game_id) => {
  return fetch(`${API_URL}${USERS}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      user_id: user_id,
      score: score,
      game_id: game_id
    })
  })
    .then(res => res.json());
}