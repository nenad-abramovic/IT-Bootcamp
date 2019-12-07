const sendMessage = (username, message) => {
  fetch('', {
    headers:,
    method: 'PUT',
    body: JSON.stringify({
      username: username,
      message: message
    })
  })
}