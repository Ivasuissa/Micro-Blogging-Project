import React from "react";
import firestore from "./firestore";
import firebase from "./firestore.js";
import Form from "./Form";
import { getMyTweetOnly } from "./TweetsList";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("tweeter").add({
      fullname: this.state.fullname,
      email: this.state.email
    });
  };

  componentDidMount = async () => {
    this.grabTweets();
    let tweet = {
      userName: localStorage.getItem("userName"),
      date: localStorage.getItem("Date"),
      content: localStorage.getItem("Content")
    };
    console.log("accesing database");
    let response = await this.addTweetToFirestore(tweet);
    console.log(response);
  };

  addTweetToFirestore = async tweet => {
    try {
      const firestoreDB = firebase.firestore();
      let response = await firestoreDB.collection("tweeter").add(tweet);
      return response;
    } catch (error) {
      console.log(error);
      return "Error";
    }
  };

  grabTweets = async () => {
    const firestoreDB = firebase.firestore();
    var docRef = firestoreDB
      .collection("tweeter")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          console.log(doc.data());
          const myTweets = this.state.data;
          myTweets.push(doc.data());
          this.setState({ data: myTweets });
          
        });
      });
  };

  render() {
    return this.state.data.map((mess, i) => (
      <div key={i} className="myTweetContainer">
        <div className="info">
           <span className="myUsername">{mess.userName}</span>      
          <span className="myDate"> {mess.date} </span>
        </div>
           <p className="myTweetOutput"> {mess.content} </p>   
      </div>
    ));
  }
}

export default User;
