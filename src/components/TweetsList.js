import React, { Component } from "react";
import Message from "./Message";
import { getMessage } from "./lib/api";
import DisplayTweet from "./Tweet";

class TweetsList extends Component {
  constructor(props) {
    super(props);
  
  }


  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map((message, i) => (
            <Message textMessage={message.textMessage} key={i} />
     
          ))}
        </ul>
      </div>
    );
  }
}
export default TweetsList;
