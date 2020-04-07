import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAd6tEpHkj1dW06X6x14vu31_qg68o2DAs",
  authDomain: "crwn-db-43463.firebaseapp.com",
  databaseURL: "https://crwn-db-43463.firebaseio.com",
  projectId: "crwn-db-43463",
  storageBucket: "crwn-db-43463.appspot.com",
  messagingSenderId: "523821934875",
  appId: "1:523821934875:web:a3c4e6567a413221db0bbe",
  measurementId: "G-SB1FXV0X82",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
