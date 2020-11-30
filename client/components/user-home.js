import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props

  const currentUser = {...user}
  const [userInfoState, setUserInfo] = useState(currentUser)

  const emptyNames =
    userInfoState.firstName === '' ||
    userInfoState.lastName === '' ||
    userInfoState.address
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
    console.log(event)
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
    <div>
      <div id="home-container">
        <h3>
          Welcome, {user.firstName} {user.lastName}!
        </h3>
        <div className="home-user-info">
          <div className={userName.firstName}>First name</div>
          <input
            name="firstName"
            type="text"
            value={userInfoState.firstName}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.firstName, 'firstName')}
            onBlur={() => onBlur(userInfoState.firstName, 'firstName')}
          />

          <div className={userName.lastName}>Last name</div>
          <input
            name="lastName"
            type="text"
            value={userInfoState.lastName}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.lastName, 'lastName')}
            onBlur={() => onBlur(userInfoState.lastName, 'lastName')}
          />
          <div className={userName.address}>Address</div>
          <input
            name="address"
            type="text"
            value={userInfoState.address}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.address, 'address')}
            onBlur={() => onBlur(userInfoState.address, 'address')}
          />
          <div className={userName.email}>email</div>
          <input
            name="email"
            type="text"
            value={userInfoState.email}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.email, 'email')}
            onBlur={() => onBlur(userInfoState.email, 'email')}
          />
        </div>
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
