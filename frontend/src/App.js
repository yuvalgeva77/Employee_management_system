//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/employees" exact component={Employees}/>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
