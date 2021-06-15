//import logo from './logo.svg';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employees from './Employees';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  function Loginclick() {
    {/* <Employees authorized={true}></Employees> */}
      console.log('You clicked submit.');
      history.push("/employees");
    }
  return (
    <div>
      <form>
        <div class="mb-3">
          {/* <h4>Login:</h4> */}
          <label for="exampleInputEmail1" class="form-label"> </label>
          <input type="email" name="email" class="col-form-label" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="please enter your email" />
        </div>

        <button type="submit"
          onClick={Loginclick }
          class="btn btn-primary">log in</button>
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
// function Loginclick(e) {
//   e.preventDefault();
//   let request = {
//     email: document.getElementById('exampleInputEmail1').value
//   }
//   // console.log(request.email);
//   axios.post(('/login'), { request })
//     .then(resp => {
//       alert(resp.data.message);

//      // <Employees authorized={true}></Employees>
//      // return <Redirect to="/login"/>



//     })
//     .catch(err => {
//       console.log(err);
//     })
//}


export default Login;


