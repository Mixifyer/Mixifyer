import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {thunkFetchAllProducts} from '../store/products'

const AllProducts = ({products, getProducts}) => {
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {!products.length ? (
        <div>Loading...</div>
      ) : (
        products.map(product => (
          <div key={product.id}>
            <div>
              <img src={product.image} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <h5>{product.category}</h5>
              <h5>{product.type}</h5>
              <h5>{product.price / 100} $</h5>
              <h5>{product.flavor}</h5>
              <h5>{product.volume} oz</h5>
              <h5>{product.inStock}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

const mapState = state => {
  return {
    products: state.products.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(thunkFetchAllProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
