import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/home';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Nav/>
              <div className="Wrapper"> 
              <Route exact path="/" component={Home} />

              </div>
          </div>
        </Router>
      
    );
  }
}

export default App;
