import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyB56bAMtj0QrxawJAXs-KitypIatD5mCE4",
  authDomain: "m-city-323a0.firebaseapp.com",
  databaseURL: "https://m-city-323a0.firebaseio.com",
  projectId: "m-city-323a0",
  storageBucket: "m-city-323a0.appspot.com",
  messagingSenderId: "459615025532",
  appId: "1:459615025532:web:d31877935e9089b556ccf9",
  measurementId: "G-GFRKZNJS9E"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
}