import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBagkVk599pWlvyQSgxwC39do1YRtS1HhE",
    authDomain: "crwn-db-784c0.firebaseapp.com",
    projectId: "crwn-db-784c0",
    storageBucket: "crwn-db-784c0.appspot.com",
    messagingSenderId: "87447757808",
    appId: "1:87447757808:web:130eac646db3dd437af335",
    measurementId: "G-0SRTZH5MF3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
