import axios from 'axios'

//ACTION TYPES
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//ACTION CREATORS
const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})

//INITIAL STATE
let initialState = {
  allProducts: [],
  singleProduct: {}
}

//THUNK CREATORS

export const thunkFetchAllProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(getAllProducts(data))
  } catch (error) {
    next(error)
  }
}

export const thunkFetchSingleProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    return dispatch(getSingleProduct(data))
  } catch (error) {
    next(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.product}
    default:
      return state
  }
}
