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

  const [state, setstate] = useState({singleId: ''})
  const [newFormState, setNewFormState] = useState(false)

  const toggleCreateForm = () => {
    setNewFormState(!newFormState)
  }

  const toggleForm = id => {
    if (state.singleId !== id) {
      setstate({
        singleId: id
      })
    } else {
      setstate({
        singleId: ''
      })
    }
  }

  return (
    <div>
      <div className="newFormToggle">
        {user.isAdmin && (
          <button
            type="button"
            onClick={() => toggleCreateForm()}
            id="toggle-button"
          >
            {!newFormState ? 'Create New Product' : 'Close Form'}
          </button>
        )}
        {newFormState && <CreateProductForm />}
      </div>
      {!products.length ? (
        <div>Loading...</div>
      ) : (
        products.map(product => (
          <div key={product.id} id="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} />
            </Link>
            <div>
              <div className="productBox">
                <div className="productInfo">
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
                {state.singleId === product.id && (
                  <CreateProductForm currentProduct={product} />
                )}
              </div>
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
                {!state.singleId
                  ? 'Edit the product'
                  : product.id === state.singleId
                    ? 'Cancel'
                    : 'Edit the product'}
              </button>
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
