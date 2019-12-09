let api_url = 'https://coetus.herokuapp.com';

let get_messages = () => {
    return fetch(`${api_url}/api/message`)
    .then(response => response.json())
};

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
};

let get_user_messages = (username) => {
    return fetch(`${api_url}/api/message`, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            username: username
        })
    })
    .then(response => response.json());
}
let delete_message =() => {
    return fetch(`${api_url}/api/message`, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'DELETE',
        body: JSON.stringify({
        })
    })
    .then(response => console.log(response));
}

export {
    get_messages,
    send_message, 
    get_user_messages,
    delete_message
}