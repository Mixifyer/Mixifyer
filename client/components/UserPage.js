import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {me} from '../store'

/**
 * COMPONENT
 */
export const User = props => {
  const {user, handleSubmit} = props
  const currentUser = {...user}
  const [userInfoState, setUserInfo] = useState(currentUser)

  function handleChange(event) {
    event.preventDefault()
    setUserInfo({...userInfoState, [event.target.name]: event.target.value})
  }

  const userInputes = [
    ['First Name', 'firstName'],
    ['Last Name', 'lastName'],
    ['Address', 'address'],
    ['Email', 'email']
  ].map(el => (
    <div className="inputs-user-page" key={el[1]}>
      <input
        name={el[1]}
        type="text"
        value={userInfoState[el[1]]}
        onChange={handleChange}
        required
      />
      <label htmlFor={el[1]} className="user-page-label">
        {el[0]}
        <span>*</span>
      </label>
    </div>
  ))

  return (
    <div id="user-container">
      <div className="user-info">
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.email}</p>
        <p>{user.address}</p>
      </div>
      <form onSubmit={handleSubmit} className="user-info-form">
        {userInputes}
        <button type="submit">SUBMIT CHANGES</button>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()

      const email = evt.target.email.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const address = evt.target.address.value

      dispatch(me(firstName, lastName, email, address, 'update'))
    }
  }
}

export default connect(mapState, mapDispatch)(User)

/**
 * PROP TYPES
 */
User.propTypes = {
  email: PropTypes.string
}
