import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {thunkFetchAllProducts, thunkRemoveProduct} from '../store/products'
import {updateShoppingCartThunk} from '../store/shoppingCart'
import {Link} from 'react-router-dom'
import CreateOrUpdateProductForm from './CreateOrUpdateProductForm'
import {useToasts} from 'react-toast-notifications'
import {SingleProduct} from '/'

// eslint-disable-next-line complexity
const AllProducts = ({
  products,
  getProducts,
  user,
  deleteProduct,
  searchBar,
  addToCart,
  ...props
}) => {
  useEffect(() => {
    getProducts()
  }, [])

  function removeProduct(id) {
    deleteProduct(id)
  }

  const [state, setstate] = useState({singleId: ''})
  const [newFormState, setNewFormState] = useState(false)
  const [modalState, setModal] = useState({show: false, id: ''})

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

  const {categoryOrTypeOrFlavor} = props.match.params

  if (categoryOrTypeOrFlavor) {
    products = products.filter(
      product =>
        product.type === categoryOrTypeOrFlavor ||
        product.flavor === categoryOrTypeOrFlavor ||
        product.category === categoryOrTypeOrFlavor
    )
  }

  if (searchBar.length) {
    products = products.filter(singleProd => {
      return singleProd.name.toLowerCase().includes(searchBar.toLowerCase())
    })
  }
  const productsContainerStyle = !user.isAdmin
    ? 'products-container'
    : 'products-container-admin'
  const singleProductContainer = !user.isAdmin
    ? 'singleProduct-container'
    : 'singleProduct-container-admin'
  const productInfoStyle = !user.isAdmin ? 'product-info' : 'product-info-admin'

  const {addToast} = useToasts()

  const addToShoppingCart = product => {
    const productInfo = {
      id: product.id,
      quantity: 1
    }
    addToCart(productInfo)

    addToast(`${product.name} was successfully added to the cart`, {
      appearance: 'success',
      autoDismiss: true,
      autoDismissTimeout: 1500
    })
  }

  const showModal = prodId => {
    setModal({show: true, id: prodId})
  }

  const hideModal = event => {
    let cName = ['modal', 'closeButton']
    if (cName.includes(event.target.className)) setModal({show: false, id: ''})
  }

  return (
    <div id="main-container-products">
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
        {newFormState && <CreateOrUpdateProductForm />}
      </div>
      <div className={productsContainerStyle}>
        {!products.length && searchBar.length ? (
          <div>No Products Match Your Search</div>
        ) : null}
        {!products.length && !searchBar.length ? (
          <div>Loading...</div>
        ) : (
          products.map(product => (
            <div key={product.id} id={singleProductContainer}>
              <img src={product.image} onClick={() => showModal(product.id)} />
              <div id={productInfoStyle}>
                <div>
                  <h3 onClick={() => showModal(product.id)} id="product-name">
                    {product.name}
                  </h3>
                  {user.isAdmin ? (
                    <div>
                      <h5>Category: {product.category}</h5>
                      <h5>Type: {product.type}</h5>
                      <h5>Flavor: {product.flavor}</h5>
                    </div>
                  ) : (
                    <div id="tags">
                      <Link to={`/${product.type}/products`}>
                        <h5>{product.type} </h5>
                      </Link>

                      <Link to={`/${product.flavor}/products`}>
                        <h5>{product.flavor}</h5>
                      </Link>
                    </div>
                  )}

                  <h5>Price: {product.price / 100} $</h5>
                  <h5>Volume: {product.volume} oz</h5>
                  <h5>Available: {product.inStock}</h5>
                </div>
                {product.inStock !== 0 ? (
                  <button
                    type="button"
                    id="addToCart"
                    onClick={() => addToShoppingCart(product)}
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <div id="outOfStock">OUT OF STOCK</div>
                )}
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
                        ? 'Cancel edit'
                        : 'Edit the product'}
                    </button>
                  </div>
                )}
                {modalState.show &&
                  product.id === modalState.id && (
                    <div className="modal" onClick={e => hideModal(e)}>
                      <div className="modalContainer">
                        <SingleProduct product={product} />
                        <img
                          src="closebutton.png"
                          className="closeButton"
                          onClick={e => hideModal(e)}
                        />
                      </div>
                    </div>
                  )}
              </div>

              {state.singleId === product.id && (
                <CreateOrUpdateProductForm
                  currentProduct={product}
                  products={products}
                  setNewFormState={setNewFormState}
                  setState={setstate}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

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

export const Products = connect(mapState, mapDispatch)(AllProducts)
