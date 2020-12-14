import React, {useState} from 'react'
import {connect} from 'react-redux'
import {CardInfo} from './CardInfo'
import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

export const Checkout = props => {
  const [user, setUser] = useState(props.user)
  const stripePromise = loadStripe(
    'pk_test_51Hy1ivKFUCccu24m606xgCkpJHsdx0gIc9diGHO6j8tQZkiYYbhvoX9HKFXqVHA4pS8y1PSq876SwlvjUEu1NtAJ009BVL4Ry8'
  )

  return (
    <Elements className="checkout-container" stripe={stripePromise}>
      <div className="checkout-modal-details">
        <h3>CHECKOUT</h3>
        <div className="checkout-form">
          <label name="firstName"> First Name </label>
          <input
            type="text"
            name="firstName"
            autoComplete="off"
            defaultValue={user.firstName}
          />
          <label name="lastName"> Last Name </label>
          <input
            type="text"
            name="lastName"
            autoComplete="off"
            defaultValue={user.lastName}
          />
          <label name="email"> Email </label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            defaultValue={user.email}
          />
          <label name="address"> Shipping Address </label>
          <input
            type="text"
            name="address"
            autoComplete="off"
            defaultValue={user.address}
          />
          <CardInfo />
        </div>
        <button type="button">Place Your Order</button>
      </div>
    </Elements>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(Checkout)
