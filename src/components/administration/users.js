import React, { Component } from "react";
import "./administration-home.css";

class Users extends Component {


  render() {
    return (
      <div>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Users;
