/* eslint-disable complexity */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchBar from './SearchBar'
import User from './UserPage'

const Navbar = ({user, handleLogout, isLoggedIn, shoppingCart}) => {
  const [menu, setMenu] = useState(true)
  const [modalState, setModal] = useState({show: false})

  const showModal = () => {
    setModal({show: true})
    setMenu(!menu)
  }

  const hideModal = event => {
    let className = ['modal', 'close-modal-bttn-user-page']

    if (className.includes(event.target.className)) setModal({show: false})
  }

  function onClickBurger() {
    setMenu(!menu)
  }
  const onClickLinks =
    window.innerWidth < 800
      ? () => {
          return setMenu(true)
        }
      : null
  const onHandle = () => {
    if (window.innerWidth < 800) onClickLinks()
    return handleLogout()
  }

  const [mouseOver, setMouseOver] = useState(false)
  const userAccountLinks = idName =>
    !isLoggedIn ? (
      <div id={idName}>
        <Link to="/login" onClick={onClickLinks}>
          LOGIN
        </Link>
        <Link to="/signup" onClick={onClickLinks}>
          SIGN UP
        </Link>
      </div>
    ) : (
      <div id={idName}>
        {window.innerWidth < 800 ? (
          <p id="nav-links-account" onClick={() => showModal()}>
            ACCOUNT
          </p>
        ) : (
          <Link to="/account">ACCOUNT</Link>
        )}
        {modalState.show && (
          <div className="modal" onClick={e => hideModal(e)}>
            <div className="modal-user-page-container">
              <User user={user} />
              <img
                src="images/closebutton.png"
                className="close-modal-bttn-user-page"
                onClick={e => hideModal(e)}
              />
            </div>
          </div>
        )}
        <a href="#" id="logout-nav" onClick={() => onHandle()}>
          LOGOUT
        </a>
      </div>
    )

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
          {userAccountLinks('account-links')}
        </div>
      )}
    </div>
  )

  const linksClass = !menu ? 'nav-links-burger' : 'nav-links-x'
  const burgerFirstLine = menu ? 'first-line-burger' : 'first-line-x'
  const burgerSecondLine = menu ? 'second-line-burger' : 'second-line-x'

  const cart = idName => (
    <Link to="/shopping-cart" onClick={onClickLinks} id={idName}>
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
  )
  return (
    <nav>
      <div className="burger" onClick={onClickBurger}>
        <p id={burgerFirstLine} />
        <p id={burgerSecondLine} />
      </div>
      <Link onClick={onClickLinks} to="/home" id="label">
        Mixifyer
      </Link>
      {cart('shopping-cart-icon-mobile')}
      <div className={linksClass}>
        <SearchBar />
        <Link to="/home" onClick={onClickLinks}>
          HOME
        </Link>
        <Link to="/spirit/products" onClick={onClickLinks}>
          SPIRITS
        </Link>
        <Link to="/non-alcoholic/products" onClick={onClickLinks}>
          NON-ALCOHOLIC
        </Link>
        <Link to="/bitter/products" onClick={onClickLinks}>
          BITTERS
        </Link>
        {accountNav}
        {userAccountLinks('account-links-mobile')}
        {cart('shopping-cart-icon')}
      </div>
    </nav>
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
