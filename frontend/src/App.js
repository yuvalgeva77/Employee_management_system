//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import Login from './components/Login';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <Router>

      <div className="App">

        <header className="App-header">
          <h1>Employee System</h1>
          {/* <Login /> */}
          <Switch>
            <Route path="/employees" component={() => <Employees authorized={false} />} />
            { <Route path="/login" exact component={Login} /> }
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;


