import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchBar from './SearchBar'

const Navbar = ({handleClick, isLoggedIn, shoppingCart}) => {
  return (
    <div id="nav-bar">
      <nav>
        <Link to="/home" id="label">
          Mixifyer
        </Link>

        {isLoggedIn ? (
          <div className="nav-links">
            <SearchBar />
            {/* The navbar will show these links after you log in */}
            <Link to="/home">HOME</Link>
            <Link to="/products">ALL PRODUCTS</Link>
            <Link to="/spirit">SPIRITS</Link>
            <Link to="/non-alcoholic">NON-ALCOGOLIC</Link>
            <Link to="/bitter">BITTERS</Link>
            <a href="#" onClick={handleClick}>
              LOGOUT
            </a>
            <Link to="/checkout" id="shoppingCart">
              CART ({shoppingCart.totalQuantity})
            </Link>
          </div>
        ) : (
          <div className="nav-links">
            <SearchBar />
            {/* The navbar will show these links before you log in */}
            <Link to="/products">ALL PRODUCTS</Link>
            <Link to="/spirit">SPIRITS</Link>
            <Link to="/non-alcoholic">NON-ALCOGOLIC</Link>
            <Link to="/bitter">BITTERS</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/checkout" id="shoppingCart">
              CART (0)
            </Link>
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
