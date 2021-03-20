import React from 'react'
import {Link} from 'react-router-dom'

const ShoppingCartIcon = ({quantity, idName, onClickLinks}) => (
  <Link to="/shopping-cart" onClick={onClickLinks} id={idName}>
    <div id="cart-body">
      <div id="cart-left" />
      <div id="cart-bottom">{quantity}</div>
      <div id="cart-right" />
      <div id="cart-handle" />
    </div>
    <div id="wheels">
      <div className="wheels" />
      <div className="wheels" />
    </div>
  </Link>
)

export default ShoppingCartIcon
