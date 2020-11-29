import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props
  const [userInfoState, setUserInfo] = useState('')
  const [userLabel, setUserLabel] = useState(
    !userInfoState ? 'user-lable-down' : 'user-lable-up'
  )

  function onChange(event) {
    event.preventDefault()
    setUserInfo({[event.target.name]: event.target.value})
    setUserLabel('user-lable-up')
    console.log(userLabel)
  }
  const [vari, setVari] = useState(false)
  function onFocus() {
    setUserLabel('user-lable-up')
    setVari(true)
    console.log('hello')
  }
  function onClick() {
    if (vari && !userInfoState) {
      setVari(false)
      setUserLabel('user-lable-up')
    } else setUserLabel('user-lable-down')

    console.log(userLabel)
  }
  console.log(userLabel)

  return (
    <div onClick={() => onClick()}>
      <div id="home-container">
        <h3>
          Welcome, {user.firstName} {user.lastName}!
        </h3>
        <div className="home-user-info">
          <label className={userLabel} htmlFor="firstName">
            First
          </label>
          <input
            name="firstName"
            type="text"
            onChange={onChange}
            onFocus={() => onFocus()}
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
