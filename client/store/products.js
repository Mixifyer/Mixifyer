import axios from 'axios'

//ACTION TYPES
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT'

//ACTION CREATORS
const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
const createNewProduct = product => ({type: CREATE_NEW_PRODUCT, product})

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

export const thunkCreateNewProduct = product => async dispatch => {
  try {
    const {data} = await axios.post('/api/products', product)
    dispatch(createNewProduct(data))
  } catch (error) {
    console.log(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case CREATE_NEW_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
