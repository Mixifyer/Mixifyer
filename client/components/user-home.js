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
    userInfoState.firstName === '' || userInfoState.lastName === ''
  const [userName, setUserName] = useState(
    emptyNames
      ? {firstName: 'firstName-down', lastName: 'lastName-down'}
      : {firstName: 'firstName-up', lastName: 'lastName-up'}
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
          <label className={userName.firstName} htmlFor="firstName">
            First
          </label>
          <input
            name="firstName"
            type="text"
            value={userInfoState.firstName}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.firstName, 'firstName')}
            onBlur={() => onBlur(userInfoState.firstName, 'firstName')}
          />

          <div className={userName.lastName}>Last</div>
          <input
            name="lastName"
            type="text"
            value={userInfoState.lastName}
            onChange={handleChange}
            onFocus={() => onFocus(userInfoState.lastName, 'lastName')}
            onBlur={() => onBlur(userInfoState.lastName, 'lastName')}
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
