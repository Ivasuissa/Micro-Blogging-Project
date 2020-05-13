import React, { Component } from "react";
import Message from "./Message";
import { getMessage } from "./lib/api";
import DisplayTweet from "./Tweet";
import { TweetsListContext } from "./TweetsListContext";

class TweetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      myTweet: "",
      loading: true
    };
    this.getTweetFunc = this.getTweetFunc.bind(this);
  }

  getTweetFunc() {
    getMessage().then(response => {
      console.log(response);
      console.log(response.data.tweets);
      this.setState({ tweets: response.data.tweets });
    });
  }

  componentDidMount() {
    this.getTweetFunc();
    try {
      setInterval(this.getTweetFunc, 10000);
      this.setState({ loading: false });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <h3>loading...</h3>}
        {!loading && (
          <div className="tweetList">
            <ul>
              {this.state.tweets.map(tweet => (
                // <Message textMessage={message.textMessage} key={i} />
                <TweetsListContext.Provider value={this.state.tweets}>
                  <DisplayTweet
                    // userName={tweet.userName}
                    // date={tweet.date}
                    // content={tweet.content}
                    key={[tweet.date, +"by " + tweet.userName]}
                  />
                </TweetsListContext.Provider>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default TweetsList;
