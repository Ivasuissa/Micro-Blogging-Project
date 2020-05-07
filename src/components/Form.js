import React, { Component, Fragment } from "react";
import { getMessage, postMessage } from "./lib/api";

class Form extends Component {
  state = {
    message: "",
    pseudo: "Eva"
  };

  createMessage = () => {
    const { addMessage } = this.props;
    const message = {
      TheMessage: this.state.message,
      pseudo: this.state.pseudo
    };

    addMessage(message);
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
      <Fragment>
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
          <button type="submit">Tweet</button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
