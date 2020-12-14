import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'
import Message from './AuthErrorMessages'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div id="auth-container">
      <div id="auth-method">{displayName}</div>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' && (
          <div>
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              required
            />

            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              required
            />
          </div>
        )}
        <input name="email" type="text" placeholder="email" required />

        <input
          name="password"
          type="password"
          placeholder="password"
          required
        />
        {
          <div id="auth-submitBttn-google">
            <button type="submit" id={name}>
              {displayName}
            </button>
            {name === 'login' && (
              <Link to="/auth/google">
                <span />
                <div>{displayName} with Google</div>
              </Link>
            )}
          </div>
        }
        {error && error.response ? Message(name, error) : <div />}
      </form>
      {name === 'login' && (
        <div id="create-Account">
          <p>
            New to <span>HELLO!!!!!!</span>?
          </p>
          <Link to="/signup">Create an account</Link>
        </div>
      )}
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()

      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      let firstName
      let lastName
      if (formName === 'signup') {
        firstName = evt.target.firstName.value
        lastName = evt.target.lastName.value
      }
      dispatch(auth(firstName, lastName, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
