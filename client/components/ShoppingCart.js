import React, {useState} from 'react'
import {connect} from 'react-redux'
import ChangeProductQuantity from './ChangeProductQuantity'
import {updateShoppingCartThunk} from '../store/shoppingCart'
import {getClientSecret} from '../store/client'
import {Checkout} from './'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51Hy1ivKFUCccu24m606xgCkpJHsdx0gIc9diGHO6j8tQZkiYYbhvoX9HKFXqVHA4pS8y1PSq876SwlvjUEu1NtAJ009BVL4Ry8'
)
// import {Link} from 'react-router-dom'

const ShoppingCart = ({shoppingCart, getSecret, updateCart}) => {
  const [modalState, setModal] = useState({show: false})

  const onChange = (productId, qty) => {
    updateCart({id: productId, quantity: qty}, 'remove')
  }

  const showModal = () => {
    setModal({show: true})
    getSecret()
  }

  const hideModal = event => {
    let className = ['modal', 'close-modal-bttn']

    if (className.includes(event.target.className)) setModal({show: false})
  }

  return (
    <div className="shopping-cart-container">
      <div className="cart-items-list">
        {shoppingCart.currentOrder.map(item => {
          return (
            <div key={item.productId} className="cart-item">
              <img src={item.product.image} />

              <ChangeProductQuantity item={item} updateCart={updateCart} />

              <img
                src="remove-img.png"
                id="delete-item"
                onClick={() => onChange(item.productId, item.productQuantity)}
              />
            </div>
          )
        })}
      </div>
      <div className="cart-totals">
        <h2>COMPLETE ORDER</h2>
        <div className="cart-total-details">
          <div>
            <h3>Items In Cart: {shoppingCart.totalQuantity}</h3>
            <h3>Total Price: {shoppingCart.totalPrice / 100}$</h3>
          </div>
          <div id="checkout-bttn" onClick={() => showModal()}>
            CHECKOUT
          </div>
          {modalState.show && (
            <div className="modal" onClick={e => hideModal(e)}>
              <div className="modal-container">
                <Elements className="checkout-container" stripe={stripePromise}>
                  <Checkout />
                </Elements>
                <img
                  src="closebutton.png"
                  className="close-modal-bttn"
                  onClick={e => hideModal(e)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    shoppingCart: state.shoppingCart,
    clientSecret: state.clientSecret
  }
}

const mapDispatch = dispatch => {
  return {
    updateCart: (item, method) =>
      dispatch(updateShoppingCartThunk(item, method)),
    getSecret: () => dispatch(getClientSecret())
  }
}

export default connect(mapState, mapDispatch)(ShoppingCart)
