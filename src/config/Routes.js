import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Matches from '../pages/Matches'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Browse from '../pages/Browse'
import EditProfile from '../pages/EditProfile'
import ViewProfile from '../pages/ViewProfile'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return <Route {...rest} render={props => {
    return currentUser ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }}
  />
}

const Routes = (props) => (

  <Switch>
    <Route exact path='/' component={Home} />

    <Route path='/about' component={About} />

    <PrivateRoute path='/matches' component={Matches} currentUser={props.currentUser} />

    <Route path='/browse' component={Browse} />

    <Route path='/register' component={Register} />

    <PrivateRoute path='/profile/edit' component={EditProfile} currentUser={props.currentUser} />

    <Route path='/login' render={(routeComponentProps) => {
      return <Login
        {...routeComponentProps}
        // more props to come here
        currentUser={props.currentUser}
        storeUser={props.storeUser}
      />
    }} />


    <PrivateRoute path='/profile/:id' component={ViewProfile} currentUser={props.currentUser}
    />

    <PrivateRoute path='/profile' component={Profile} currentUser={props.currentUser} />

    <Route path='/browse' component={Browse} />
  </Switch>
)

export default Routes;