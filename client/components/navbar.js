import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchBar from './SearchBar'

const Navbar = ({handleClick, isLoggedIn, shoppingCart}) => {
  const [statusBurger, setStatus] = useState(false)
  console.log('.......', window.innerWidth)

  const onClickBurger = () => {
    setStatus(!statusBurger)
  }
  const onClickLinks = () => {
    console.log('helo')
    setStatus(false)
    console.log(statusBurger)
  }
  const linksClass = statusBurger ? 'nav-links-burger' : 'nav-links-x'
  const burgerFirstLine = !statusBurger ? 'first-line-burger' : 'first-line-x'
  const burgerSecondLine = !statusBurger
    ? 'second-line-burger'
    : 'second-line-x'

  const cart = idName => (
    <div className="shopCart-container">
      <Link to="/shopping-cart" onClick={() => onClickLinks()} id={idName}>
        <div id="cart-body">
          <div id="cart-left" />
          <div id="cart-bottom">{shoppingCart.totalQuantity}</div>
          <div id="cart-right" />

          <div id="cart-handle" />
        </div>
        <div id="wheels">
          <div className="wheels" />
          <div className="wheels" />
        </div>
      </Link>
    </div>
  )
  return (
    <div id="nav-bar">
      <nav>
        <div className="burger" onClick={() => onClickBurger()}>
          <p id={burgerFirstLine} />
          <p id={burgerSecondLine} />
        </div>
        <Link onClick={() => onClickLinks()} to="/home" id="label">
          Mixifyer
        </Link>
        {window.innerWidth <= 755 && cart('shopping-cart-mobile')}
        {isLoggedIn ? (
          <div className={linksClass}>
            <SearchBar />
            {/* The navbar will show these links after you log in */}
            <Link to="/home" onClick={() => onClickLinks()}>
              HOME
            </Link>
            <Link to="/products" onClick={() => onClickLinks()}>
              ALL PRODUCTS
            </Link>
            <Link to="/spirit/products" onClick={() => onClickLinks()}>
              SPIRITS
            </Link>
            <Link to="/non-alcoholic/products" onClick={() => onClickLinks()}>
              NON-ALCOGOLIC
            </Link>
            <Link to="/bitter/products" onClick={() => onClickLinks()}>
              BITTERS
            </Link>
            <a href="#" onClick={handleClick}>
              LOGOUT
            </a>
            {cart('shopping-cart')}
          </div>
        ) : (
          <div className={linksClass}>
            <SearchBar />
            {/* The navbar will show these links before you log in */}
            <Link to="/products" onClick={() => onClickLinks()}>
              ALL PRODUCTS
            </Link>
            <Link to="/spirit/products" onClick={() => onClickLinks()}>
              SPIRITS
            </Link>
            <Link to="/non-alcoholic/products" onClick={() => onClickLinks()}>
              NON-ALCOGOLIC
            </Link>
            <Link to="/bitter/products" onClick={() => onClickLinks()}>
              BITTERS
            </Link>
            <Link to="/login" onClick={() => onClickLinks()}>
              LOGIN
            </Link>
            {cart('shopping-cart')}
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
