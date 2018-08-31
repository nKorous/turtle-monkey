import React, { Component } from "react";
import "./administration-home.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.getUserList = this.getUserList.bind(this);
    this.listUsers = this.listUsers.bind(this);
  }

  componentWillMount() {
    this.getUserList();
  }

  getUserList() {
    fetch(`http://localhost:9000/dbTest`)
      .then(results => results.json())
      .then(data =>
        data.forEach(data => {
          this.setState(prevState => ({
            users: [
                ...prevState.users,
                {
                    userid: data.userid,
                    username: data.username
                }
            ]
        }))
        }))
  }

  listUsers(users) {
    return (
      <li key={users.ID} index={users.ID}>
        {users}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul>{this.state.users.map(this.listUsers)}</ul>
      </div>
    );
  }
}

export default Users;
