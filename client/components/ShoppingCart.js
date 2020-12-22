import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ChangeProductQuantity from './ChangeProductQuantity'
import {updateShoppingCartThunk} from '../store/shoppingCart'
import {getClientSecret} from '../store/client'
import {Checkout} from './'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51HxxQPA18Upi8vjogiVpqqbF60fd6wylq3kezwrqlM4oDnbZak6sAdlP0gSViQo2YhaqNfTo77NnFWE00YQ8Yqlr00AhZEP2uG'
)

const ShoppingCart = ({shoppingCart, getSecret, updateCart}) => {
  const [modalState, setModal] = useState({show: false})
  console.log('......>>>>>>>', shoppingCart)

  const onChange = (productId, qty, price) => {
    updateCart({id: productId, quantity: qty, price: qty * price}, 'remove')
  }

  const checkoutButtonId =
    shoppingCart.currentOrder.length !== undefined
      ? 'checkout-bttn'
      : 'checkout-bttn-disabled'

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
        {shoppingCart.currentOrder.length < 1 && (
          <div className="empty-cart-container">
            <img id="empty-cart-icon" src="images/empty-cart-icon.png" />
            <h2>Cart is empty!</h2>
          </div>
        )}
        {shoppingCart.currentOrder.map(item => {
          return (
            <div key={item.productId} className="cart-item">
              <div id="cart-item-img">
                <img src={item.product.image} />
              </div>
              <ChangeProductQuantity item={item} updateCart={updateCart} />

              <img
                src="images/remove-img.png"
                id="delete-item"
                onClick={() =>
                  onChange(
                    item.productId,
                    item.productQuantity,
                    item.savedPrice
                  )
                }
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
          <button
            type="button"
            disabled={!shoppingCart.currentOrder.length}
            id={checkoutButtonId}
            onClick={() => showModal()}
          >
            CHECKOUT
          </button>
          {modalState.show && (
            <div className="modal" onClick={e => hideModal(e)}>
              <div className="modal-container">
                <Elements className="checkout-container" stripe={stripePromise}>
                  <Checkout />
                </Elements>
                <img
                  src="images/closebutton.png"
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
