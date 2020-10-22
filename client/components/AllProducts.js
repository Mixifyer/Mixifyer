import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {thunkFetchAllProducts} from '../store/products'
import {Link} from 'react-router-dom'
import CreateProductForm from './CreateProductForm'

const AllProducts = ({products, getProducts, user}) => {
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {user.isAdmin && <CreateProductForm />}
      {!products.length ? (
        <div>Loading...</div>
      ) : (
        products.map(product => (
          <div key={product.id} id="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} />
            </Link>
            <div>
              <Link to={`/products/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <h5>Category: {product.category}</h5>
              <h5>Type: {product.type}</h5>
              <h5>Price: {product.price / 100} $</h5>
              <h5>Flavor: {product.flavor}</h5>
              <h5>Volume: {product.volume} oz</h5>
              <h5>Available: {product.inStock}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(thunkFetchAllProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
