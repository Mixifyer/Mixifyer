import axios from 'axios'

// ACTION TYPES:
const GET_OR_UPDATE_CART = 'GET_CART'
const REMOVE_PRODUCT_FROM_CARD = 'REMOVE_PRODUCT_FROM_CARD'

// ACTION CREATORS:

const getOrUpdateCart = shoppingCart => ({type: GET_CART, shoppingCart})
const removeProductFromCart = productId => ({
  type: REMOVE_PRODUCT_FROM_CARD,
  productId
})

// THUNKS
