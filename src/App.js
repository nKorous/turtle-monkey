import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Reports from "./components/reports.js"
import Landing from './components/landing.js'
import axios from 'axios'


class App extends Component {
  state = {
    users: []
  }

  async getUsers(){
    axios.get(`https://monkey-turtle.herokuapp.com/dbTest`)
      .then((data) => {
        data.data.forEach((records) => {
          this.state.users.push({records})
        })
      })
  }

  componentDidMount(){
    this.getUsers()
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
          Users: <br/>

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
