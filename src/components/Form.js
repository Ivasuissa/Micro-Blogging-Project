import React, { Component, Fragment } from "react";
import { getMessage, postMessage } from "./lib/api";
import Profile from "./Profile";

class Form extends Component {
  state = {
    message: ""
  };

  createMessage = () => {
    const { addMessage } = this.props;
    const tweet = {
      content: this.state.message,
      userName: localStorage.getItem("userName"),
      date: new Date().toISOString().toString()
    };

    addMessage(tweet);
    this.setState({ message: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createMessage();
  };

  handleChange = event => {
    const message = event.target.value;
    this.setState({ message });
  };

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            className="input"
            type="text"
            placeholder="What you have in mind"
            maxLength="140"
            required
            value={this.state.message}
          />
          <button
            className="formButton"
            onClick={this.createMessage}
            type="submit"
          >
            Tweet
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
