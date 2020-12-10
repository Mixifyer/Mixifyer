import React from 'react'
import {connect} from 'react-redux'

const ShoppingCart = ({shoppingCart}) => {
  console.log('SHOPPINGCART>>>>>>>>', shoppingCart)
  return (
    <div className="shoppingCartContainer">
      <div className="cartItems">
        {shoppingCart.currentOrder.map(item => {
          return (
            <div key={item.productId} className="cartItem">
              <img src={item.product.image} />
              <div className="cartItemData">
                <h1>{item.product.name}</h1>
                <h2>Quantity: {item.productQuantity}</h2>
                <h2>
                  Price: ${item.savedPrice / 100 * item.productQuantity} (${item.savedPrice /
                    100}/item)
                </h2>
              </div>
            </div>
          )
        })}
      </div>
      <div className="cartDetails">
        <h1>totalPrice {shoppingCart.totalPrice}</h1>
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
  return {}
}

export default connect(mapState, null)(ShoppingCart)
