import React, { Component } from "react";
import "./administration-home.css";
import Users from "./users.js";

class AdministrationHome extends Component {
  constructor(props){
    super(props)

      this.state = {
        users: []
      }

      this.getUsers = this.getUsers.bind(this)
      this.listUsers = this.listUsers.bind(this)
  }

  componentWillMount(){
    this.getUsers(`http://localhost:9000/dbTest`)
  }
  
  getUsers(endpoint){
    fetch(endpoint)
      .then(result => result.json())
      .then(result => 
        result.forEach((data) => {
          this.state.users.push(data)
        }))
  }


  listUsers(listdata){
    return (
      <Users>
        <li key={listdata.userid} index={listdata.userid}> 
          <ul>
            <li>Name: {listdata.username}</li>
              <ul>
                <li>Seceret: {listdata.seceretword}</li>
                <li>Active: <input type='checkbox' defaultChecked={listdata.isactive} /></li>
                <li>Member Since: {listdata.recorddate}</li>
              </ul>
          </ul>
      </li>
      </Users>
    )
  }

  render() {
    return (
      <div>
        <h1>Administration</h1>

        <ul>
          {this.state.users.map(this.listUsers)}
        </ul>

      </div>
    );
  }
}

export default AdministrationHome;
