import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {thunkCreateNewProduct} from '../store/products'

const CreateProductForm = props => {
  const {createNewProduct} = props
  let initialState = {
    name: '',
    image: '',
    category: '',
    type: '',
    price: '',
    flavor: '',
    volume: '',
    inStock: '',
    errorMessage: '*'
  }
  const [state, setstate] = useState(initialState)

  function handleSubmit(event) {
    event.preventDefault()
    createNewProduct(state)
    setstate(initialState)
  }
  function handleChange(event) {
    setstate({...state, [event.target.name]: event.target.value})
  }
  let disable = !state.name || !state.price || !state.volume
  let disableName = !state.name
  let disablePrice = !state.price
  let disableVolume = !state.volume
  let disableCategory = !state.category
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="newProductForm">
          <h2>New Product Form</h2>
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={state.name}
            placeholder="required"
          />
          {disableName && <div className="asterisk">{state.errorMessage}</div>}
          <label htmlFor="image">Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            value={state.image}
          />
          <label htmlFor="category">Category</label>
          <select
            name="category"
            title="required"
            onChange={handleChange}
            required
          >
            <option value="" />
            <option value="Spirit">Spirit</option>
            <option value="Soda">Soda</option>
            <option value="Bitter">Bitter</option>
          </select>

          {disableCategory && (
            <div className="asterisk">{state.errorMessage}</div>
          )}
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            onChange={handleChange}
            value={state.type}
          />
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="text"
            onChange={handleChange}
            value={state.price}
            placeholder="required"
          />
          {disablePrice && <div className="asterisk">{state.errorMessage}</div>}
          <label htmlFor="flavor">Flavor</label>
          <input
            name="flavor"
            type="text"
            onChange={handleChange}
            value={state.flavor}
          />
          <label htmlFor="volume">Volume</label>
          <input
            name="volume"
            type="text"
            onChange={handleChange}
            value={state.volume}
            placeholder="required"
          />
          {disableVolume && (
            <div className="asterisk">{state.errorMessage}</div>
          )}
          <label htmlFor="inStock">inStock</label>
          <input
            name="inStock"
            type="text"
            onChange={handleChange}
            value={state.inStock}
          />
          <button disabled={disable} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    createNewProduct: product => dispatch(thunkCreateNewProduct(product))
  }
}

export default connect(mapState, mapDispatch)(CreateProductForm)
