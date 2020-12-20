import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Home,
  Login,
  Signup,
  User,
  Products,
  SingleProduct,
  ShoppingCart,
  ConfirmationPage
} from './components'
import {me} from './store'
import {ToastProvider} from 'react-toast-notifications'

/**
 * COMPONENT
 */
const Routes = props => {
  useEffect(() => {
    props.loadInitialData()
  }, [])

  const {isLoggedIn} = props

  return (
    <ToastProvider>
      <div id="main-container">
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route
            exact
            path="/:categoryOrTypeOrFlavor/products"
            component={Products}
          />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/products/:name" component={SingleProduct} />
          <Route exact path="/confirmationPage" component={ConfirmationPage} />
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {isLoggedIn && (
            <Switch>
              <Route exact path="/account" component={User} />
            </Switch>
          )}
          <Route component={Login} />
        </Switch>
      </div>
    </ToastProvider>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
