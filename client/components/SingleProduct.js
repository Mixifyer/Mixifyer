import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {thunkFetchSingleProduct} from '../store/singleProduct'

const SingleProduct = props => {
  const {product, match, getProduct} = props
  useEffect(() => {
    getProduct(match.params.name)
  }, [])

  return (
    <div>
      {!product.name ? (
        <h1>Product Doesn't Exist</h1>
      ) : (
        <div>
          <img src={product.image} />
          <div />
          <h3>{product.name}</h3>
          <h5>Category: {product.category}</h5>
          <h5>Type: {product.type}</h5>
          <h5>Price: {product.price / 100} $</h5>
          <h5>Flavor: {product.flavor}</h5>
          <h5>Volume: {product.volume} oz</h5>
          <h5>Available: {product.inStock}</h5>
        </div>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    product: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getProduct: productId => dispatch(thunkFetchSingleProduct(productId))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
