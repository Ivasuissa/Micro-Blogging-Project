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
          <div key={i} className="newTweetContainer">
            <div className="info">
               <span className="username">{mess.userName}</span>      
              <span className="date"> {mess.date} </span>
            </div>
               <p className="tweetOutput"> {mess.content} </p>   
          </div>
        ));
      }}
    </TweetsListContext.Consumer>
  );
}

export default DisplayTweet;
