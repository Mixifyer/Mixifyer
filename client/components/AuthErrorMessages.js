import React from 'react'
const Message = (method, error) => {
  const responseMessage = (
    <div id="err-message">
      <div>{error.response.data}</div>
    </div>
  )
  if (
    method === 'login' &&
    error.response.data === 'Wrong username and/or password'
  ) {
    return responseMessage
  } else if (
    method === 'signup' &&
    (error.response.data ===
      'Both Fisrt Name and Last Name should be filled up' ||
      error.response.data === 'User already exists' ||
      error.response.data ===
        'Validation error: "email" field should be email type text like @gmail.com for example!')
  ) {
    return responseMessage
  }
}

export default Message
