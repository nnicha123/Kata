import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Nav from './Nav';
import AllUsers from './AllUsers';
import Birthday from './Birthday';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() =><AllUsers/>} />
          <Route exact path="/birthday" render={() => <Birthday/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
