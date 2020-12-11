import React, {useState} from 'react'
import {connect} from 'react-redux'
import {thunkFetchSingleProduct} from '../store/singleProduct'
import {updateShoppingCartThunk} from '../store/shoppingCart'

const SingleProduct = props => {
  const {product, match, getProduct, addToCart} = props
  // useEffect(() => {
  //   getProduct(match.params.name)
  // }, [])
  // const [quantity, setQuatity] = useState(0)
  async function addToShoppingCart(singleProduct) {
    const productInfo = {
      id: singleProduct.id,
      quantity: 1
    }
    console.log('this is cart: ', props)
    await addToCart(productInfo)
  }
  console.log('this is cart: ', props)
  return (
    <div className="modalDetails">
      {!product.name ? (
        <h1>Product Doesn't Exist</h1>
      ) : (
        <div>
          <img src={product.image} />
          {/* <p>x</p> */}
          <div />
          <h3>{product.name}</h3>
          <h5>Category: {product.category}</h5>
          <h5>Type: {product.type}</h5>
          <h5>Price: {product.price / 100} $</h5>
          <h5>Flavor: {product.flavor}</h5>
          <h5>Volume: {product.volume} oz</h5>
          <h5>Available: {product.inStock}</h5>
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
        </div>
      )}
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
