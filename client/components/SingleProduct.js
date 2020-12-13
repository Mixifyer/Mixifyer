import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {thunkFetchSingleProduct} from '../store/singleProduct'
import {updateShoppingCartThunk} from '../store/shoppingCart'

const SingleProduct = props => {
  const {product, match, getProduct, addToCart} = props
  const [quatity, setQuantity] = useState(0)

  async function addToShoppingCart(singleProduct) {
    const productInfo = {
      id: singleProduct.id,
      quantity: quatity
    }

    await addToCart(productInfo)
  }
  function handleChange(event) {
    console.log('event.target.value', event.target.value)
    setQuantity(Number(event.target.value))
  }

  return (
    <div className="modal-details">
      <img className="product-image" src={product.image} />
      <div className="product-details-container">
        <h3>{product.name}</h3>
        <div className="tags">
          <Link to={`${product.category}/products`}>
            <h5>{product.category} </h5>
          </Link>
          <Link to={`/${product.type}/products`}>
            <h5>{product.type} </h5>
          </Link>
          <Link to={`/${product.flavor}/products`}>
            <h5>{product.flavor}</h5>
          </Link>
        </div>

        <h5>{product.price / 100} $</h5>
        <h5>{product.volume} oz</h5>
        <h5>In Stock: {product.inStock}</h5>
        <h4>QTY:</h4>

        <div className="tags">
          <select
            name="quantity"
            type="number"
            onChange={handleChange}
            value={quatity}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          {product.inStock !== 0 ? (
            <button
              type="button"
              id="add-to-cart"
              onClick={() => addToShoppingCart(product)}
            >
              ADD TO CART
            </button>
          ) : (
            <div id="out-of-stock">OUT OF STOCK</div>
          )}
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    // product: state.singleProduct,
    shoppingCart: state.shoppingCart
  }
}

const mapDispatch = dispatch => {
  return {
    addToCart: (product, method) =>
      dispatch(updateShoppingCartThunk(product, method)),
    getProduct: productId => dispatch(thunkFetchSingleProduct(productId))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
