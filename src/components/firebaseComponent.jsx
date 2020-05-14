import React from "react";
import firestore from "./firestore";
import firebase from "./firestore.js";
import Form from "./Form";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    let response = await firebase.database().ref("tweeter").once('value').then((snapshot)=>{
      snapshot.forEach((childSnapshot)=>{
        console.log(childSnapshot)
        // var childKey = childSnapshot.key;
        // var childData = childSnapshot.val();
        // console.log(`childkey: ${childkey}`)
        // console.log(`childData: ${childData}`)
      })

    });
    console.log(response);
  };

  render() {
    return <div>Hello</div>;
  }
}

export default User;
