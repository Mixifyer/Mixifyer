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
    setstate({...initialState, category: state.category})
  }

  function handleChange(event) {
    setstate({...state, [event.target.name]: event.target.value})
  }

  let disable = !state.name || !state.price || !state.volume

  const asterisk = <div className="asterisk">{state.errorMessage}</div>

  const categoryOptions = ['', 'Spirit', 'Soda', 'Bitter'].map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ))
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
          {!state.name && asterisk}
          <label htmlFor="image">Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            value={state.image}
          />
          <label htmlFor="category">Category</label>
          <select name="category" onInput={handleChange} required>
            {categoryOptions}
          </select>

          {!state.category && asterisk}
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
          {!state.price && asterisk}
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
          {!state.volume && asterisk}
          <label htmlFor="inStock">inStock</label>
          <input
            name="inStock"
            type="text"
            onChange={handleChange}
            value={state.inStock}
          />
          <button disabled={disable} type="submit" className="create-button">
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

// const inputNames = Object.keys(initialState).map((inputName) => {
//   let nameOfInput =
//     inputName === 'name' || inputName === 'price' || inputName === 'volume'
//   nameOfInput ? (nameOfInput = 'required') : (nameOfInput = '')

//   if (inputName === 'category') {
//     return (
//       <div key={inputName}>
//         <label htmlFor="category">{inputName.toUpperCase()}</label>
//         <select name="category" onInput={handleChange} required>
//           {categoryOptions}
//         </select>
//         {!state[inputName] && asterisk}
//       </div>
//     )
//   } else {
//     return (
//       <div key={inputName}>
//         <label htmlFor="image">{inputName.toUpperCase()}</label>
//         <input
//           name={inputName}
//           type="text"
//           onChange={handleChange}
//           value={state[inputName]}
//           placeholder={nameOfInput}
//         />
//         {nameOfInput === 'required' && !state[inputName] && asterisk}
//       </div>
//     )
//   }
// })

// return (
//   <div>
//     <div>
//       <form onSubmit={handleSubmit} className="newProductForm">
//         <h2>New Product Form</h2>
//         {inputNames}
//         <button disabled={disable} type="submit" className="create-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
// )
// }
