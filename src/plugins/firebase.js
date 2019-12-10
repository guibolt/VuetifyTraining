import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAmoaPena4S_mubEEUAKKXqqZlbQEcHIhM",
  authDomain: "novos-projetos.firebaseapp.com",
  databaseURL: "https://novos-projetos.firebaseio.com",
  projectId: "novos-projetos",
  storageBucket: "novos-projetos.appspot.com",
  messagingSenderId: "360911203159",
  appId: "1:360911203159:web:9a8471c298de8c1e7eec12",
  measurementId: "G-YXC4P3VXY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;