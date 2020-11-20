import axios from 'axios'

// ACTION TYPES:
const GET_OR_UPDATE_SHOPPINGCART = 'GET_OR_UPDATE_SHOPPINGCART'
const REMOVE_PRODUCT_FROM_SHOPPINGCART = 'REMOVE_PRODUCT_FROM_SHOPPINGCART'

// ACTION CREATORS:
const getOrUpdateShoppingCart = shoppingCart => ({
  type: GET_OR_UPDATE_SHOPPINGCART,
  shoppingCart
})
const removeProductFromShoppingCart = productId => ({
  type: REMOVE_PRODUCT_FROM_SHOPPINGCART,
  productId
})

// THUNKS:
export const getShoppingCartOrCheckoutThunk = (
  order,
  method
) => async dispatch => {
  try {
    if (method === 'checkout') {
      const {data} = await axios.get('api/cart', order)
      dispatch(getOrUpdateShoppingCart(data))
    } else {
      const {data} = await axios.get('api/cart')
      dispatch(getOrUpdateShoppingCart(data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateShoppingCartThunk = (product, method) => async dispatch => {
  try {
    console.log('thunk-----:', product)
    if (method === 'remove') {
      const {data} = await axios.delete(`api/cart/${product.id}`)
      dispatch(removeProductFromShoppingCart(product.id))
    } else {
      const {data} = await axios.put(`api/cart`, product)
      dispatch(getOrUpdateShoppingCart(data))
    }
  } catch (error) {
    console.error(error)
  }
}
export default function(state, action) {
  switch (action.type) {
    case GET_OR_UPDATE_SHOPPINGCART:
      return action.shoppingCart
    case REMOVE_PRODUCT_FROM_SHOPPINGCART:
      return state.filter(product => product.id === action.productId)
    default:
      return state
  }
}
