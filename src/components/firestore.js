import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAjXBK60K7GZ_zTvrN_huUF-OxbC4xCZNg",
  authDomain: "microblogging-eva-itc.firebaseapp.com",
  databaseURL: "https://microblogging-eva-itc.firebaseio.com",
  projectId: "microblogging-eva-itc",
  storageBucket: "microblogging-eva-itc.appspot.com",
  messagingSenderId: "32328267661",
  appId: "1:32328267661:web:d13388a3b82578c0c02fc4",
  measurementId: "G-TFZ07E5S6P"
};

firebase.initializeApp(config);
firebase.analytics();
export default firebase;
