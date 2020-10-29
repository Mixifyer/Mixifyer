import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {thunkCreateNewProduct} from '../store/products'

// eslint-disable-next-line complexity
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

  const [state, setstate] = useState(
    {...props.currentProduct, price: props.currentProduct.price / 100} ||
      initialState
  )
  console.log(state)

  let disable = !state.name || !state.price || !state.volume

  const categoryOptions = ['Spirit', 'Soda', 'Bitter'].map(category => (
    <option key={category} value={category} className="option">
      {category}
    </option>
  ))

  function handleSubmit(event) {
    event.preventDefault()
    createNewProduct(state)
    setstate(initialState)
  }

  function handleChange(event) {
    setstate({...state, [event.target.name]: event.target.value})
  }

  const asterisk = <div className="asterisk">{state.errorMessage}</div>

  return (
    <div id="editForm">
      <form onSubmit={handleSubmit} className="newProductForm">
        <h3 id="form-name">
          {props.currentProduct
            ? `Edit ${props.currentProduct.name}`
            : 'New Product Form'}
        </h3>

        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          defaultValue={state.name}
          placeholder="required"
          className="input-newPoduct"
        />
        {!state.name && asterisk}
        <label htmlFor="image">Image</label>
        <input
          name="image"
          type="text"
          onChange={handleChange}
          defaultValue={state.image}
          className="input-newPoduct"
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          onInput={handleChange}
          defaultValue={state.category}
          className={state.category ? 'input-newPoduct' : 'optionRequired'}
        >
          {!state.category && (
            <option key="required" hidden>
              required
            </option>
          )}

          {categoryOptions}
        </select>

        {!state.category && asterisk}
        <label htmlFor="type">Type</label>
        <input
          name="type"
          type="text"
          onChange={handleChange}
          defaultValue={state.type}
          className="input-newPoduct"
        />
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="text"
          onChange={handleChange}
          defaultValue={state.price}
          placeholder="required"
          className="input-newPoduct"
        />
        {!state.price && asterisk}
        <h6>$</h6>
        <label htmlFor="flavor">Flavor</label>
        <input
          name="flavor"
          type="text"
          onChange={handleChange}
          defaultValue={state.flavor}
          className="input-newPoduct"
        />
        <label htmlFor="volume">Volume</label>
        <input
          name="volume"
          type="text"
          onChange={handleChange}
          defaultValue={state.volume}
          placeholder="required"
          className="input-newPoduct"
        />
        {!state.volume && asterisk}
        <h6>Oz</h6>
        <label htmlFor="inStock">Available</label>
        <input
          name="inStock"
          type="text"
          onChange={handleChange}
          defaultValue={state.inStock}
          className="input-newPoduct"
        />
        <button disabled={disable} type="submit" className="create-button">
          Submit
        </button>
      </form>
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
//          <select
//           name="category"
//           onInput={handleChange}
//           onChange={() => onClickSelector()}
//           value="required"
//           className={state.requiredOpion ? 'options' : 'optionRequired'}
//           >
//           {!state.category && (
//             <option key="required" hidden>
//               required
//             </option>
//           )}

//           {categoryOptions}
//         </select>
//     </div>
//     )
//   } else {
//     return (
//       <div key={inputName}>
//         <label htmlFor="{inputName}">{inputName.toUpperCase()}</label>
//         <input
//           name={inputName}
//           type="text"
//           onChange={handleChange}
//           value={state[inputName]}
//           placeholder={nameOfInput}
//           className="input-newPoduct"

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
