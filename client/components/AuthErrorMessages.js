import React from 'react'
const Message = (method, error) => {
  console.log('error.....', error.response.data)
  const responseMessage = (
    <div>
      <div> {error.response.data}</div>
    </div>
  )
  if (
    method === 'login' &&
    error.response.data === 'Wrong username and/or password'
  ) {
    return responseMessage
  }
  if (
    method === 'signup' &&
    (error.response.data ===
      'Both Fisrt Name and Last Name should be filled up' ||
      error.response.data === 'User already exists')
  )
    return responseMessage
  else {
    error.response.data =
      '"email" field should be email type text like @gmail.com for example!'
    return responseMessage
  }
}

export default Message
