import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import React from 'react'

export const CardInfo = () => {
  const stripePromise = loadStripe(
    'pk_test_51Hy1ivKFUCccu24m606xgCkpJHsdx0gIc9diGHO6j8tQZkiYYbhvoX9HKFXqVHA4pS8y1PSq876SwlvjUEu1NtAJ009BVL4Ry8'
  )
  const CARD_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '13px',
        '::placeholder': {
          color: 'grey'
        }
      },
      invalid: {
        color: 'red',
        iconColor: 'red'
      }
    }
  }

  return <CardElement options={CARD_OPTIONS} />
}
