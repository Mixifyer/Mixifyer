import React, {useState} from 'react'
import {connect} from 'react-redux'
import {CardInfo} from './CardInfo'

export const Checkout = props => {
  const [user, setUser] = useState(props.user)

  return (
    <div className="modal-details" id="checkout-details">
      <label name="firstName"> First Name </label>
      <input type="text" name="firstName" value={user.firstName} />
      <label name="lastName"> Last Name </label>
      <input type="text" name="lastName" value={user.lastName} />
      <label name="email"> Email </label>
      <input type="text" name="email" value={user.email} />
      <label name="address"> Address </label>
      <input type="text" name="address" value={user.address} />
      <CardInfo />
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(Checkout)
