import axios from 'axios'

// ACTION TYPES:
const GET_OR_UPDATE_SHOPPINGCART = 'GET_OR_UPDATE_SHOPPINGCART'
const REMOVE_PRODUCT_FROM_SHOPPINGCART = 'REMOVE_PRODUCT_FROM_SHOPPINGCART'

// ACTION CREATORS:
export const getOrUpdateShoppingCart = shoppingCart => ({
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
      console.log('getShopThink:  ', data)
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateShoppingCartThunk = (product, method) => async dispatch => {
  try {
    if (method === 'remove') {
      const {data} = await axios.delete(`api/cart/${product.id}`)
      dispatch(removeProductFromShoppingCart(product.id))
    } else {
      console.log('cartThunk: >>>>', product)
      let startOfURL = 'http://' + window.location.host
      const data = await axios.put(`${startOfURL}/api/cart`, product)
      dispatch(getOrUpdateShoppingCart(data.data))
    }
  } catch (error) {
    console.error('error on Thunk', error)
  }
}

let initialCart = {
  currentOrder: [],
  totalQuantity: 0,
  totalPrice: 0
}

export default function(state = initialCart, action) {
  switch (action.type) {
    case GET_OR_UPDATE_SHOPPINGCART:
      return action.shoppingCart
    case REMOVE_PRODUCT_FROM_SHOPPINGCART:
      return {
        ...state,
        currentOrder: state.currentOrder.filter(
          product => product.id === action.productId
        )
      }
    default:
      return state
  }
}
