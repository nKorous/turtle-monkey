import React, { Component } from "react";
import "./administration-home.css";
import Users from "./users.js";

class AdministrationHome extends Component {
  render() {
    return (
      <div>
        <h1>Administration</h1>

        <Users />
      </div>
    );
  }
}

export default AdministrationHome;
