import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const User = props => {
  const {user} = props

  const currentUser = {...user}
  const [userInfoState, setUserInfo] = useState(currentUser)

  const emptyNames =
    userInfoState.firstName === '' ||
    userInfoState.lastName === '' ||
    userInfoState.address === ''
  const [userName, setUserName] = useState(
    !emptyNames
      ? {
          firstName: 'firstName-down',
          lastName: 'lastName-down',
          address: 'address-down',
          email: 'email-down'
        }
      : {
          firstName: 'firstName-up',
          lastName: 'lastName-up',
          address: 'address-up',
          email: 'email-up'
        }
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
      <div className="user-info">
        <div className={userName.firstName}>
          First name<span>*</span>
        </div>
        <input
          name="firstName"
          type="text"
          value={userInfoState.firstName}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.firstName, 'firstName')}
          onBlur={() => onBlur(userInfoState.firstName, 'firstName')}
          required
        />

        <div className={userName.lastName}>
          Last name<span>*</span>
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
        <div className={userName.address}>
          Address<span>*</span>
        </div>
        <input
          name="address"
          type="text"
          value={userInfoState.address}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.address, 'address')}
          onBlur={() => onBlur(userInfoState.address, 'address')}
          required
        />
        <div className={userName.email}>
          email<span>*</span>
        </div>
        <input
          name="email"
          type="text"
          value={userInfoState.email}
          onChange={handleChange}
          onFocus={() => onFocus(userInfoState.email, 'email')}
          onBlur={() => onBlur(userInfoState.email, 'email')}
          required
        />
      </div>
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

export default connect(mapState)(User)

/**
 * PROP TYPES
 */
User.propTypes = {
  email: PropTypes.string
}
