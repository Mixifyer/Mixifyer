import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {CardInfo} from './CardInfo'
import {getShoppingCartOrCheckoutThunk} from '../store/shoppingCart'
import {useStripe, CardElement, useElements} from '@stripe/react-stripe-js'
import history from '../history'

export const Checkout = props => {
  const [user, setUser] = useState(props.user)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmCardPayment(props.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen'
        }
      }
    })

    //PAYMENT FAILED
    if (result.error) {
      setOpen(true)
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message)
    } else if (result.paymentIntent.status === 'succeeded') {
      //SUCCESSFUL PAYMENT

      props.createNewOrder(props.currentOrder, 'checkout')
      history.push('/confirmationPage')
      //
    }
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-modal-details">
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
      <button type="submit">Place Your Order</button>
    </form>
  )
}

const mapState = state => {
  return {
    currentOrder: state.shoppingCart.currentOrder,
    user: state.user,
    clientSecret: state.clientSecret
  }
}
const mapDispatch = dispatch => {
  return {
    createNewOrder: (order, method) =>
      dispatch(getShoppingCartOrCheckoutThunk(order, method))
  }
}

export default connect(mapState, mapDispatch)(Checkout)
