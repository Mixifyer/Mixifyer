/* eslint-disable complexity */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchBar from './SearchBar'

const Navbar = ({user, handleLogout, isLoggedIn, shoppingCart}) => {
  const [statusBurger, setStatus] = useState(false)
  const onClickBurger = () => {
    setStatus(!statusBurger)
  }
  const onClickLinks = () => {
    setStatus(false)
  }
  const [mouseOver, setMouseOver] = useState(false)

  const accountNav = (
    <div
      className="user-account-nav"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <h6>Hello, {isLoggedIn ? `${user.firstName}` : 'Login'}</h6>
      <span className="arrow-down" />

      {mouseOver && (
        <div className="account-links-container">
          <div className="arrow-up" />
          <div id="account-links">
            {!isLoggedIn ? (
              <Link to="/login" className="account-nav-div-link">
                LOGIN
              </Link>
            ) : (
              <Link to="/account">ACCOUNT</Link>
            )}
            {!isLoggedIn ? (
              <Link to="/signup" className="account-nav-div-link">
                SIGN UP
              </Link>
            ) : (
              <a href="#" onClick={handleLogout}>
                LOGOUT
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
  // ) : (
  //   <div className="accountNav">
  //     <h6>Hello, {user.name} </h6>
  //     <div id="account-nav-div">
  //       <Link to="/account">ACCOUNT</Link>
  //       <a href="#" onClick={handleLogout}>
  //         LOGOUT
  //       </a>
  //     </div>
  //   </div>
  // )

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
        {window.innerWidth <= 800 && cart('shopping-cart-mobile')}
        <div className={linksClass}>
          <SearchBar />
          <Link to="/home" onClick={() => onClickLinks()}>
            HOME
          </Link>
          <Link to="/spirit/products" onClick={() => onClickLinks()}>
            SPIRITS
          </Link>
          <Link to="/non-alcoholic/products" onClick={() => onClickLinks()}>
            NON-ALCOHOLIC
          </Link>
          <Link to="/bitter/products" onClick={() => onClickLinks()}>
            BITTERS
          </Link>
          {accountNav}
          {cart('shopping-cart')}
        </div>
        {/* // : (
        //   <div className={linksClass}>
        //     <SearchBar />
        //     <Link to="/home" onClick={() => onClickLinks()}>
        //       HOME
        //     </Link>
        //     <Link to="/spirit/products" onClick={() => onClickLinks()}>
        //       SPIRITS
        //     </Link>
        //     <Link to="/non-alcoholic/products" onClick={() => onClickLinks()}>
        //       NON-ALCOGOLIC
        //     </Link>
        //     <Link to="/bitter/products" onClick={() => onClickLinks()}>
        //       BITTERS
        //     </Link>
        //     <Link to="/login" onClick={() => onClickLinks()}>
        //       LOGIN
        //     </Link>
        //     {cart('shopping-cart')}
        //   </div>
        // )} */}
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
    user: state.user,
    isLoggedIn: !!state.user.id,
    shoppingCart: state.shoppingCart
  }
}

const mapDispatch = dispatch => {
  return {
    handleLogout() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
