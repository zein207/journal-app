import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA404A-Gb3SI9rDLYlLPMwRBa0x1kdNOHs",
    authDomain: "journal-app-f547b.firebaseapp.com",
    projectId: "journal-app-f547b",
    storageBucket: "journal-app-f547b.appspot.com",
    messagingSenderId: "154779631648",
    appId: "1:154779631648:web:cd885509927ebc1fc37c45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}