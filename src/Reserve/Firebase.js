import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBlPdNa54Y_aiNPDcLfUSLZkqwtWCzPXlA",
  authDomain: "sanju-f634e.firebaseapp.com",
  databaseURL: "https://sanju-f634e.firebaseio.com",
  projectId: "sanju-f634e",
  storageBucket: "sanju-f634e.appspot.com",
  messagingSenderId: "292162426421"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
