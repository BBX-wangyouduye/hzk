// 路由模块

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRouter
