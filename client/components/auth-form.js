import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div id="auth-container">
      <div id="auth-method">{displayName}</div>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' && (
          <div>
            <input name="firstName" type="text" placeholder="First name" />

            <input name="lastName" type="text" placeholder="Last name" />
          </div>
        )}
        <input name="email" type="text" placeholder="email" />

        <input name="password" type="password" placeholder="password" />
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

        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {name === 'login' && (
        <div id="create-Account">
          <p>
            New to <span>Mixifyer</span>?
          </p>
          <Link to="/signup">Create an account</Link>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
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
      let firstName
      let lastName
      if (name === 'signup') {
        firstName = evt.target.firstName.value
        lastName = evt.target.lastName.value
      }
      const formName = evt.target.name

      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, firstName, lastName))
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
