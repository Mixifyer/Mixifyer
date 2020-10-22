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
    price: 0,
    flavor: '',
    volume: 0,
    inStock: 0
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
          />
          <label htmlFor="image">Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            value={state.image}
          />
          <label htmlFor="category">Category</label>
          <input
            name="category"
            type="text"
            onChange={handleChange}
            value={state.category}
          />
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
            type="number"
            onChange={handleChange}
            value={state.price}
          />
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
            type="number"
            onChange={handleChange}
            value={state.volume}
          />
          <label htmlFor="inStock">inStock</label>
          <input
            name="inStock"
            type="number"
            onChange={handleChange}
            value={state.inStock}
          />
          <button type="submit">Submit</button>
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
