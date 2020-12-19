import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Products} from './'
import {thunkFetchAllProducts, thunkRemoveProduct} from '../store/products'
import {updateShoppingCartThunk} from '../store/shoppingCart'

/**
 * COMPONENT
 */
const Home = props => {
  return (
    <div className="home-container">
      <div id="home-message">
        <h1>Mixifyer</h1>
        <h3>
          Everything that you need for your favorite cocktails and more...
        </h3>
      </div>
      <Products props={props} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    searchBar: state.searchBar
  }
}

const mapDispatch = dispatch => {
  return {
    deleteProduct: id => dispatch(thunkRemoveProduct(id)),
    getProducts: () => dispatch(thunkFetchAllProducts()),
    addToCart: product => dispatch(updateShoppingCartThunk(product))
  }
}

export default connect(mapState, mapDispatch)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
}
