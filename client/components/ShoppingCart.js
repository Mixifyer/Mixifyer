import React, {useState} from 'react'
import {connect} from 'react-redux'
import ChangeProductQuantity from './ChangeProductQuantity'
import {updateShoppingCartThunk} from '../store/shoppingCart'
import {Checkout} from './'
// import {Link} from 'react-router-dom'

const ShoppingCart = ({shoppingCart, updateCart}) => {
  const [modalState, setModal] = useState({show: false})

  const onChange = productId => {
    updateCart({id: productId}, 'remove')
  }

  const showModal = () => {
    console.log('SHOW BEFORE>>>', modalState.show)
    setModal({show: true})
    console.log('SHOW AFTER>>>', modalState.show)
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
                onClick={() => onChange(item.productId)}
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
                <Checkout />
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
