import firebase from "./firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQYhVVupJtMy-9QTr5IFTMecnmbDT7v78",
  authDomain: "social-scheduler-create-post.firebaseapp.com",
  databaseURL:
    "https://social-scheduler-create-post-default-rtdb.firebaseio.com/",
  projectId: "social-scheduler-create-post",
  storageBucket: "social-scheduler-create-post.appspot.com",
  messagingSenderId: "734390674105",
  appId: "1:734390674105:web:04e57bbb49f796a4187168",
  measurementId: "G-Z9Z0K18X0Z",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}

export default Firebase;
