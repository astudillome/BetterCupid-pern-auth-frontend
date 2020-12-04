import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'

const Login = props => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/profile' />

  return (
    <div className="login-form card">
      <h4 className="login-header">Login</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="email" className="col-form-label">Email</label>
          <div className="col-sm-10">
            <input 
              onChange={ handleEmail } 
              value={ email } 
              type="email" 
              id="email" 
              name="email" 
              required  
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="col-form-label">Password</label>
          <div className="col-sm-10">
            <input 
              onChange={ handlePassword } 
              value={ password } 
              type="password" 
              id="password" 
              name="password" 
              required
            />
          </div>
        </div>
        <button type="submit" className="btn pink-button login-button">Login</button>
      </form>
    </div>
  )
}
export default Login;