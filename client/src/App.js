import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import './App.css';
import Users from './users/Users'
import Login from './login/Login'
import Signup from './signup/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
           <NavLink to="/login">Login</NavLink>
           &nbsp;|&nbsp;
           <NavLink to="/users">Users</NavLink>
           &nbsp;|&nbsp;
           <NavLink to="/signup">SignUp</NavLink>
           &nbsp;|&nbsp;
           <button onClick={this.logout}>Logout</button>
         </nav>
         <header>
           <main>
             <Route path="/login" component={Login} />
             <Route path="/users" component={Users} />
             <Route path="/signup" component ={Signup} />
           </main>
         </header>
      </div>
    );
  }
  
  logout = () => {
    localStorage.removeItem('jwt')

    this.props.history.push('/login')
  }
}

export default withRouter(App);