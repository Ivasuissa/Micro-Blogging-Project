import React from "react";
import { TweetsListContext } from "./TweetsListContext";

function DisplayTweet(props) {
  // const userName = props.userName;
  // const date = props.date;
  // const content = props.content;

  return (
    <TweetsListContext.Consumer>
      {data => {
        return data.map((mess, i) => (
          <div key={i} id="newTweetContainer">
            <div className="info">
               <span id="username">{mess.userName}</span>      
              <span id="date"> {mess.date} </span>
            </div>
               <p id="tweetOutput"> {mess.content} </p>   
          </div>
        ));
      }}
    </TweetsListContext.Consumer>
  );
}

export default DisplayTweet;
