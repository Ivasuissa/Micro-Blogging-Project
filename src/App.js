import React, { Component, Fragment } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import "./App.css";
import TweetsList from "./components/TweetsList";

class App extends Component {
  state = {
    messages: [],
  
  };

  addMessage = message => {
    const messages = this.state.messages;
    const textMessage = { textMessage: message };
    messages.unshift(textMessage);
    this.setState({ messages });
  };

  render() {
    return (
      <div className="App">
        <Form addMessage={this.addMessage} />
        <TweetsList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
