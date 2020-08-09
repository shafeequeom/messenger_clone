import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1atbpd1dcmFNbhGqN12_LXI3b-YIEMLE",
  authDomain: "messenger-e7a6b.firebaseapp.com",
  databaseURL: "https://messenger-e7a6b.firebaseio.com",
  projectId: "messenger-e7a6b",
  storageBucket: "messenger-e7a6b.appspot.com",
  messagingSenderId: "67869780552",
  appId: "1:67869780552:web:f67fe79d7fd193db28467d",
  measurementId: "G-5ZPLT2QYSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
