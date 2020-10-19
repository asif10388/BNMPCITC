import firebase from "firebase/app";
import "firebase/firestore";

//Firebase functionality removed due to project submission

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

//firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
