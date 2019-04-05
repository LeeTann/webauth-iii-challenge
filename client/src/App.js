import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import { Navbar, Button, Container } from 'reactstrap';

import Users from './users/Users'
import Login from './login/Login'
import Signup from './signup/Signup'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar color="dark" expand="lrg" className="link">
           <NavLink to="/login" className="link">Login</NavLink>
           &nbsp;|&nbsp;
           <NavLink to="/users" className="link">Users</NavLink>
           &nbsp;|&nbsp;
           <NavLink to="/signup" className="link">SignUp</NavLink>
           &nbsp;|&nbsp;
           <Button onClick={this.logout}>Logout</Button>
         </Navbar>
         <header>
           <Container>
             <Route path="/login" component={Login} />
             <Route path="/users" component={Users} />
             <Route path="/signup" component ={Signup} />
           </Container>
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