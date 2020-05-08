import React from "react";

function DisplayTweet(props) {
  const userName = props.userName;
  const date = props.date;
  const content = props.content;

  return (
    <div id="newTweetContainer">
      <div className="info">
              <span id="username"> {userName} </span>
              <span id="date"> {date} </span>
      </div>
            <p id="tweetOutput"> {content} </p>
          
    </div>
  );
}

export default DisplayTweet;
