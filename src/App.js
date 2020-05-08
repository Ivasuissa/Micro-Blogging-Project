import React, { Component, Fragment } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import "./App.css";
import TweetsList from "./components/TweetsList";
import { getMessage, postMessage } from "./components/lib/api";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    messages: []
  };

  addMessage = message => {
    const messages = this.state.messages;
    const textMessage = { textMessage: message };
    messages.unshift(textMessage);
    console.log("message", message);
    this.setState({ messages });
    postMessage(message);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div className="navbar">
            <ul>
              <li>
                <Link to="/home"> About </Link>
              </li>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/profile/">
              <Profile />
            </Route>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/home">
              <Form addMessage={this.addMessage} />
              <TweetsList messages={this.state.messages} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
