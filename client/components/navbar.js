import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchBar from './SearchBar'

const Navbar = ({handleClick, isLoggedIn, shoppingCart}) => {
  const links = (
    <div>
      <Link to="/products">ALL PRODUCTS</Link>
      <Link to="/spirit/products">SPIRITS</Link>
      <Link to="/non-alcoholic/products">NON-ALCOGOLIC</Link>
      <Link to="/bitter/products">BITTERS</Link>
    </div>
  )

  return (
    <div>
      <h1 id="label">Mixifyer</h1>
      <nav>
        <SearchBar />
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">HOME</Link>
            {links}
            <a href="#" onClick={handleClick}>
              LOGOUT
            </a>
            <Link to="/checkout" id="shoppingCart">
              CART ({shoppingCart.totalQuantity})
            </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            {links}
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGN UP</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    shoppingCart: state.shoppingCart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
