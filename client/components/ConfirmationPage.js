import React from 'react'
import {connect} from 'react-redux'

function ConfirmationPage(props) {
  return (
    <div className="pay-confirm-page">
      <img id="comfirm-img" src="images/confirm-img.png" />
      <h2>Your order is complete!</h2>
      <h2>Thank you for your purchase!</h2>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    order: state.shoppingCart
  }
}

export default connect(mapStateToProps)(ConfirmationPage)
