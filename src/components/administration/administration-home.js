import React, { Component } from "react";
import "./administration-home.css";
import Users from "./users.js";
import * as dateFormat from 'dateformat'

class AdministrationHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
    this.listUsers = this.listUsers.bind(this);
    this.nextID = this.nextID.bind(this)
  }

  componentWillMount() {
    this.getUsers(`http://localhost:9000/dbTest`);
  }

  getUsers(endpoint) {
    fetch(endpoint)
      .then(result => result.json())
      .then(json => json.forEach(data => {
          this.setState(prevState => ({
            users: [
              ...prevState.users,
              {
                ID: this.nextID(),
                username: data.username,
                seceretword: data.seceretword,
                isactive: data.isactive,
                recorddate: dateFormat(data.recorddate, 'yyyy-mm-dd')
              }
            ]
          }))
        }))
  }

  nextID(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  listUsers(users) {
    return (
      <Users key={users.ID}>
        <p>Name: {users.username}</p>
          <ul>
            <li>Seceret: {users.seceretword}</li>
            <li>Active: <input type='checkbox' defaultChecked={users.isactive} /></li>
            <li>Member Since: {users.recorddate}</li>
          </ul>
      </Users>

    );
  }

  render() {
    return (
      <div>
        <h1>Administration</h1>

        <div className="userList">
          {this.state.users.map(this.listUsers)}
        </div>
      </div>
    );
  }
}

export default AdministrationHome;
