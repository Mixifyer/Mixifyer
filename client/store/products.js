import axios from 'axios'

//ACTION TYPES
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

//ACTION CREATORS
const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})

//INITIAL STATE
let initialState = []

//THUNK CREATORS

export const thunkFetchAllProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(getAllProducts(data))
  } catch (error) {
    console.log(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}
