const BASE_URL = 'https://coetus.herokuapp.com';
const API_URL = '/api/gamer';

const SCORES = '/scores';
const USERS = '/users';

const MEMORY_GAME_CARDS = '/memory/cards';

export const getAllScores = () => {
  return fetch(`${BASE_URL}${API_URL}${SCORES}`)
    .then(res => res.json());
};

export const getUser = (userID) => {
  return fetch(`${BASE_URL}${API_URL}${USERS}/${userID}`)
    .then(res => res.json());
};

export const register = (user) => {
  return fetch(`${BASE_URL}${API_URL}${USERS}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(user)
  })
    .then(res => res.json());
}

export const login = (user) => {
  return fetch(`${BASE_URL}${API_URL}${USERS}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(user)
  })
    .then(res => res.json());
}

export const getMemoryCards = () => {
  return fetch(`${BASE_URL}${API_URL}${MEMORY_GAME_CARDS}`)
    .then(res => res.json());
}