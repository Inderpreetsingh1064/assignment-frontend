import {React,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Container/Home'
import ChartsPage from './Container/ChartsPage'
import College from './Container/College'
import './App.css';
function App() {
  return (
    <>
      <div className="App">
          <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/college" component={College}></Route>
          </Switch>
      </div>
    </>);
}

export default App;
