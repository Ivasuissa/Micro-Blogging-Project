import React, { Component, Fragment } from "react";
import {TweetsListContext} from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  handleChange2 = event => {
    const userName = event.target.value;
    this.setState({ userName });
  };
  handleFormSubmit2 = () => {
    const { userName } = this.state;
    localStorage.setItem("userName", userName);
  };

  componentDidMount() {
    const userName2 = localStorage.getItem("userName");
    this.setState({ userName2 });
  }

  render() {
    return (
      <div className="profile">
        <h2>Profile</h2>
        <div>
          <form className="profilForm" onSubmit={this.handleFormSubmit2}>
            <label>UserName</label>
            <br />
            <input type="text" onChange={this.handleChange2} required></input>
            <br />
            <button onClick={this.addTask}> Register </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
