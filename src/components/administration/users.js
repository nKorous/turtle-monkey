import React, { Component } from "react";
import "./administration-home.css";

class Users extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }


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
