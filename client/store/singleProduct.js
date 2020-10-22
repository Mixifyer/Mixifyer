import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//ACTION CREATORS
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})

//INITIAL STATE
let initialState = {}

//THUNK CREATORS
export const thunkFetchSingleProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(getSingleProduct(data))
  } catch (error) {
    console.log(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
