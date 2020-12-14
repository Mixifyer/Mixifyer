import axios from 'axios'

const UPDATE_SECRET = 'UPDATE_SECRET'

const updateClient = secret => ({
  type: UPDATE_SECRET,
  secret
})

export const getClientSecret = () => {
  return async dispatch => {
    try {
      console.log('InsideGetClientSecretBefore>>>>>')
      const response = await axios.get('/secret')
      console.log('InsideGetClientSecretAfter>>>>>', response)

      dispatch(updateClient(response.data.client_secret))
    } catch (error) {
      console.log('Error retrieving client secret: ', error)
    }
  }
}

export default function(state = '', action) {
  switch (action.type) {
    case UPDATE_SECRET:
      return action.secret
    default:
      return state
  }
}
