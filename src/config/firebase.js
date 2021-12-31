import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqd3EgPv0hwUZl--mrBMjKUotjkZFwTTw",
  authDomain: "titan-wingist.firebaseapp.com",
  projectId: "titan-wingist",
  storageBucket: "titan-wingist.appspot.com",
  messagingSenderId: "602234082576",
  appId: "1:602234082576:web:cdb7be65aef136557d4195",
  measurementId: "G-70EJGQCY8G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export { db };