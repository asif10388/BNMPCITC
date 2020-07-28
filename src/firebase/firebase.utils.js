import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCysiz1ahohZSZQBJXsx6BS_7uNZNwL0oU",
  authDomain: "bnmpcitc-6a21b.firebaseapp.com",
  databaseURL: "https://bnmpcitc-6a21b.firebaseio.com",
  projectId: "bnmpcitc-6a21b",
  storageBucket: "bnmpcitc-6a21b.appspot.com",
  messagingSenderId: "858982066119",
  appId: "1:858982066119:web:23e687d22ab34a0cc45be2",
  measurementId: "G-3PQE6YCSV0",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const analytics = firebase.analytics();
export default firebase;
