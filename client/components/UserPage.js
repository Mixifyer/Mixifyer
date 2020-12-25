import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {auth} from '../store'

/**
 * COMPONENT
 */
export const User = props => {
  const {user, handleSubmit} = props

  const currentUser = {...user}
  const [userInfoState, setUserInfo] = useState(currentUser)

  // const emptyNames =
  //   !userInfoState.address
  const [userName, setUserName] = useState(
    {
      firstName: 'firstName-up',
      lastName: 'lastName-up',
      address: 'address-up',
      email: 'email-up'
    }
    // : {
    //     firstName: 'firstName-up',
    //     lastName: 'lastName-up',
    //     address: 'address-up',
    //     email: 'email-up'
    //   }
  )

  function handleChange(event) {
    event.preventDefault()
    setUserInfo({...userInfoState, [event.target.name]: event.target.value})
  }

  function onFocus(curInfo, classType) {
    if (
      userInfoState[classType] === '' &&
      userName[classType] === `${classType}-down`
    )
      setUserName({...userName, [classType]: `${classType}-up`})
  }

  function onBlur(curInfo, classType) {
    if (userInfoState[classType] === '') {
      setUserName({...userName, [classType]: `${classType}-down`})
    }
  }

  return (
    <div id="user-container">
      <form onSubmit={handleSubmit} className="user-info">
        <div className="inputs-user-page">
          <input
            name="firstName"
            type="text"
            value={userInfoState.firstName}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.firstName, 'firstName')}
            onBlur={() => onBlur(userInfoState.firstName, 'firstName')}
            required
          />
          <label htmlFor="firstName" className="user-page-label">
            First name<span>*</span>
          </label>
        </div>
        <input
          name="lastName"
          type="text"
          value={userInfoState.lastName}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.lastName, 'lastName')}
          onBlur={() => onBlur(userInfoState.lastName, 'lastName')}
          required
        />
        <label htmlFor="lastName" className={userName.lastName}>
          Last name<span>*</span>
        </label>

        <input
          name="address"
          type="text"
          value={userInfoState.address}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.address, 'address')}
          onBlur={() => onBlur(userInfoState.address, 'address')}
          required
        />
        <label htmlFor="address" className={userName.lastName}>
          Shipping address<span>*</span>
        </label>

        <input
          name="email"
          type="text"
          value={userInfoState.email}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.email, 'email')}
          onBlur={() => onBlur(userInfoState.email, 'email')}
          required
        />
        <label htmlFor="email" className={userName.lastName}>
          email<span>*</span>
        </label>

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

      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const address = evt.target.address.value

      dispatch(auth(firstName, lastName, email, password, formName, address))
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
