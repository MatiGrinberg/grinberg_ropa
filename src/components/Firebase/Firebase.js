import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCyrRkL45QNK84IL3xAtqxrKtJHMZJEaVA",
    authDomain: "grinberg-ropa.firebaseapp.com",
    projectId: "grinberg-ropa",
    storageBucket: "grinberg-ropa.appspot.com",
    messagingSenderId: "558839031532",
    appId: "1:558839031532:web:32f20100e338f800f1a7c9"
});


export const db = app.firestore();
export const auth = app.auth()
export default app;