import axios from 'axios'
import history from '../history'
import {getOrUpdateShoppingCart} from './shoppingCart'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}
//
/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    const currentOrder = await axios.get('api/cart')
    dispatch(getUser(res.data || defaultUser))
    dispatch(getOrUpdateShoppingCart(currentOrder.data))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  firstName,
  lastName,
  email,
  password,
  method
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      firstName,
      lastName,
      email,
      password
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    const currentOrder = await axios.get('api/cart')
    dispatch(getUser(res.data))
    dispatch(getOrUpdateShoppingCart(currentOrder.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    dispatch(
      getOrUpdateShoppingCart({
        currentOrder: [],
        totalQuantity: 0,
        totalPrice: 0
      })
    )
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
