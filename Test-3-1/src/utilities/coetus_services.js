const api_url = 'https://coetus.herokuapp.com';

let get_all_messages = () => {
  return fetch(`${api_url}/api/message`)
  .then(response => response.json())
  .then(data => data.data,
    error => `Error: ${error}`);
}

let get_user_messages = (username) => {
  return fetch(`${api_url}/api/message`, {
    headers: {"Content-Type": "application/json; charset=utf-8"},
    method: 'POST',
    body: JSON.stringify({
      username: username
    })
  })
  .then(response => response.json())
  .then(data => data.messages,
    error => `Error: ${error}`);
}

let send_message = (username, message) => {
  return fetch(`${api_url}/api/message`, {
    headers: {"Content-Type": "application/json; charset=utf-8"},
    method: 'PUT',
    body: JSON.stringify({
      username: username,
      message: message
    })
  })
  .then(response => response.json());
}

export {
  get_all_messages,
  get_user_messages,
  send_message
}