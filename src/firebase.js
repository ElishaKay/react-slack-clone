import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//Reed's DB
// var config = {
//   apiKey: "AIzaSyBlmVP-KjEdHBgrKiGVBVrieKUr4fC9lmQ",
//   authDomain: "react-slack-clone-26509.firebaseapp.com",
//   databaseURL: "https://react-slack-clone-26509.firebaseio.com",
//   projectId: "react-slack-clone-26509",
//   storageBucket: "react-slack-clone-26509.appspot.com",
//   messagingSenderId: "1007294518207"
// };

//Elisha's DB
const config = {
  apiKey: "AIzaSyCZxd_mQV4djq1dibj71oT-Gw84Z3cFZz0",
  authDomain: "react-messenger-europe.firebaseapp.com",
  databaseURL: "https://react-messenger-europe.firebaseio.com",
  projectId: "react-messenger-europe",
  storageBucket: "react-messenger-europe.appspot.com",
  messagingSenderId: "1024856158065",
  appId: "1:1024856158065:web:d7f7ad295cc2c027"
};

firebase.initializeApp(config);

export default firebase;