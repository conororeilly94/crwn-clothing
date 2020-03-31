import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA00n0e8ntyZsSnQDsJ0m3Yve2z7MkqVpo",
  authDomain: "crwn-db-9c2c5.firebaseapp.com",
  databaseURL: "https://crwn-db-9c2c5.firebaseio.com",
  projectId: "crwn-db-9c2c5",
  storageBucket: "crwn-db-9c2c5.appspot.com",
  messagingSenderId: "658259830328",
  appId: "1:658259830328:web:10741e14daa49d7d3728cd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
