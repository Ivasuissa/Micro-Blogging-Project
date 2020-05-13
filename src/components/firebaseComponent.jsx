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
    const { addMessage } = this.props;
    let tweet = {
      userName: localStorage.getItem("userName"),
      date: new Date().toISOString(),
      content: "Hello"
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

  render() {
    return <div>Hello</div>;
  }
}

export default User;
