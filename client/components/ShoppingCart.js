import React from 'react'
import {connect} from 'react-redux'
import ChangeProductQuantity from './ChangeProductQuantity'
import {updateShoppingCartThunk} from '../store/shoppingCart'

const ShoppingCart = ({shoppingCart, updateCart}) => {
  console.log(shoppingCart.totalPrice)
  return (
    <div className="shoppingCartContainer">
      <div className="cartItems">
        {shoppingCart.currentOrder.map(item => {
          return (
            <div key={item.productId} className="cartItem">
              <img src={item.product.image} />
              <div className="cartItemData">
                <h4>{item.product.name}</h4>
                <ChangeProductQuantity item={item} updateCart={updateCart} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="cartDetails">
        <h1>totalPrice {shoppingCart.totalPrice / 100}</h1>
        <br />
        <h1>totalQuantity {shoppingCart.totalQuantity}</h1>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

const mapDispatch = dispatch => {
  return {
    updateCart: (item, method) =>
      dispatch(updateShoppingCartThunk(item, method))
  }
}

export default connect(mapState, mapDispatch)(ShoppingCart)
