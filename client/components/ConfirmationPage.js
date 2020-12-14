import React from 'react'
import {connect} from 'react-redux'

function ConfirmationPage() {
  return (
    <div className="pay-confirm-page">
      <img id="comfirm-img" src="confirm-img.png" />
      <h2>Your order is complete!</h2>
      <h2>The order number is 1111</h2>
      <h2>Thank you for your purchase!</h2>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentOrder: state.shoppingCart.currentOrder
  }
}

export default connect(mapStateToProps)(ConfirmationPage)
