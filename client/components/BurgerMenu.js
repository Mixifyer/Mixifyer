import React from 'react'

const BurgerMenu = ({setBurger, burger}) => (
  <div id="burger-container">
    <button onClick={() => setBurger(!burger)} id={burger ? 'burger' : 'x'}>
      <div id="lineOne" />
      <div id="lineTwo" />
      <div id="lineThree" />
    </button>
  </div>
)

export default BurgerMenu
