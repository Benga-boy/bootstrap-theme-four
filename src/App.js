import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Categories from './components/pages/categories/Categories'
import Dashboard from './components/pages/dashboard/Dashboard'
import Details from './components/pages/details/Details'
import Login from './components/pages/login/Login'
import Posts from './components/pages/posts/Posts'
import Profile from './components/pages/profile/Profile'
import Settings from './components/pages/settings/Settings'
import Users from './components/pages/users/Users'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

