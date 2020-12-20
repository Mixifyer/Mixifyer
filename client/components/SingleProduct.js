import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateShoppingCartThunk} from '../store/shoppingCart'

const SingleProduct = props => {
  const {product, addToCart} = props
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
  const qtyCount = Array(product.inStock)
    .fill('')
    .map((el, index) => <option key={index}>{index + 1}</option>)
  return (
    <div className="modal-details">
      <div className="product-image-single-page">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-details-container">
        <h3>{product.name}</h3>
        <div className="tags">
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
        <h5>QTY:</h5>

        <div className="select-qty-single-product-page">
          <select
            name="quantity"
            type="number"
            onChange={handleChange}
            value={quatity}
          >
            {qtyCount}
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

// const mapState = state => {
//   return {
//     // product: state.singleProduct,
//     shoppingCart: state.shoppingCart
//   }
// }

const mapDispatch = dispatch => {
  return {
    addToCart: (product, method) =>
      dispatch(updateShoppingCartThunk(product, method))
  }
}

export default connect(null, mapDispatch)(SingleProduct)
