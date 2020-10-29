import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {thunkFetchAllProducts, thunkRemoveProduct} from '../store/products'
import {Link} from 'react-router-dom'
import CreateProductForm from './CreateProductForm'

const AllProducts = ({products, getProducts, user, deleteProduct}) => {
  useEffect(() => {
    getProducts()
  }, [])
  function removeProduct(id) {
    deleteProduct(id)
  }

  const [state, setstate] = useState({toggle: true})

  const toggleForm = id => {
    if (!state.toggle) {
      setstate({
        toggle: true,
        singleId: id
      })
    } else {
      setstate({
        toggle: false,
        singleId: id
      })
    }
  }

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
              <button
                type="button"
                onClick={() => removeProduct(product.id)}
                className="delete-button"
              >
                Remove the product
              </button>

              <button
                type="button"
                onClick={() => toggleForm(product.id)}
                className="toggle-button"
              >
                {state.toggle
                  ? 'Edit the product'
                  : product.id === state.singleId
                    ? 'Cancel'
                    : 'Edit the product'}
              </button>
              {!state.toggle &&
                state.singleId === product.id && (
                  <CreateProductForm currentProduct={product} />
                )}
              {/* currentProduct={product} */}
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
    getProducts: () => dispatch(thunkFetchAllProducts()),
    deleteProduct: id => dispatch(thunkRemoveProduct(id))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
