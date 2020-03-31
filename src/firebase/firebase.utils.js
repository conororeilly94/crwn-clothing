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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // Checking if user already created, if not do try method
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
