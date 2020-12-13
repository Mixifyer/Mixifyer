import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import React from 'react'

export const CardInfo = () => {
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripeKey = process.env.STRIPE_CODE
  console.log('STRIPEKEY>>>>', process.env)
  const stripePromise = loadStripe(stripeKey)

  return (
    <Elements stripe={stripePromise}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
    </Elements>
  )
}
