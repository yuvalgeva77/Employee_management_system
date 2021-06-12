//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">

      <form method="POST" action="/login">
        <div class="mb-3">
          <h3>Employee System</h3>
          <h4>Login:</h4>
          <label for="exampleInputEmail1" class="form-label"> </label>
          <input type="email" name="email" class="col-sm-3 col-form-label" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="please enter your email" />
        </div>

        <button type="submit" class="btn btn-primary">sign in</button>
        {/* <button type="new user" class="btn btn-primary">new user</button> */}

      </form>

    </div>

    // <Router>
    // <div className="App">
    //   <header className="App-header">
    //     <Nav />
    //     <Switch>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/employees" exact component={Employees} />
    //     </Switch>
    //   </header>
    // </div>
    // </Router>
  );
}
function Login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('exampleInputEmail1').value
  }
  // console.log(request.email);
  axios.post(('/login'), { request })
    .then(resp => {
      alert(resp.data.message);
    })
    .catch(err => {
      console.log(err);
    })
}
export default App;


