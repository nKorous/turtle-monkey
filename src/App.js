import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Reports from "./components/reports.js"
import Landing from './components/landing.js'


class App extends Component {
  constructor(props) { //The constructor handles State. when state changes, it kicks off a re-render
    super(props)
    this.state = {
      users: []
    }

  }

  render() {
    return (
      //wrapping everything in router
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        </div>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/reports' component={Reports}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
