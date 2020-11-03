import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {
  thunkFetchAllProducts,
  thunkRemoveProduct
  // filterByTagName,
} from '../store/products'
import {Link} from 'react-router-dom'
import CreateProductForm from './CreateProductForm'

const AllProducts = ({
  products,
  getProducts,
  user,
  deleteProduct,
  // filter
  name
}) => {
  const [productState, setProducts] = useState(products)
  if (products.length && !productState.length) setProducts(products)

  useEffect(() => {
    if (name === 'products') getProducts()
    else setProducts(products)
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
  function filterProducts(tagType, tagName) {
    let filteredProducts = products

    const newList = filteredProducts.filter(
      product => product[tagType] === tagName
    )
    setProducts(newList)
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
      {!productState.length ? (
        <div>Loading...</div>
      ) : (
        productState.map(product => (
          <div key={product.id} id="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} />
            </Link>
            <div>
              <div className="productBox">
                <div className="productInfo">
                  <div>
                    <Link to={`/products/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>

                    {user.isAdmin ? (
                      <div>
                        <h5>Category: {product.category}</h5>
                        <h5>Type: {product.type}</h5>
                        <h5>Flavor: {product.flavor}</h5>
                      </div>
                    ) : (
                      <h5>
                        <span>
                          <Link
                            onClick={() =>
                              filterProducts('category', product.category)
                            }
                            to="/products/filtered"
                          >
                            <h5>{product.category} </h5>
                          </Link>
                        </span>
                        <span>
                          <Link
                            onClick={() => filterProducts('type', product.type)}
                            to="/products/filtered"
                          >
                            <h5>{product.type} </h5>
                          </Link>
                        </span>
                        <span>
                          <Link
                            onClick={() =>
                              filterProducts('flavor', product.flavor)
                            }
                            to="/products/filtered"
                          >
                            <h5>{product.flavor}</h5>
                          </Link>
                        </span>
                      </h5>
                    )}

                    <h5>Price: {product.price / 100} $</h5>
                    <h5>Volume: {product.volume} oz</h5>
                    <h5>Available: {product.inStock}</h5>
                  </div>
                  {state.singleId === product.id && (
                    <CreateProductForm
                      currentProduct={product}
                      products={products}
                      setNewFormState={setNewFormState}
                      setState={setstate}
                    />
                  )}
                </div>
                {user.isAdmin && (
                  <div>
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
                      {product.id === state.singleId
                        ? 'Cancel'
                        : 'Edit the product'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

const mapState = state => {
  return {
    name: 'products',
    products: state.products,
    user: state.user
  }
}
const filterState = state => {
  return {
    name: 'filter',
    products: state.products,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    deleteProduct: id => dispatch(thunkRemoveProduct(id)),
    // filter: (tagType, tagName) => dispatch(filterByTagName(tagType, tagName)),
    getProducts: () => dispatch(thunkFetchAllProducts())
  }
}
// const filterByTageName = (dispatch) => {
//   return {
//     filter: (tagType, tagName) => dispatch(filterByTagName(tagType, tagName)),
//   }
// }

export const Products = connect(mapState, mapDispatch)(AllProducts)
export const FilteredProducts = connect(filterState, mapDispatch)(AllProducts)
