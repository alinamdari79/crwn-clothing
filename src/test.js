import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('jkPIPRMCvFK8ShMTAb4f').collection('cartItems').doc('NJDdrHmesHije71iOFw7');
firestore.doc('/users/jkPIPRMCvFK8ShMTAb4f/cartItems/NJDdrHmesHije71iOFw7');
firestore.collection('/users/jkPIPRMCvFK8ShMTAb4f/cartItems');