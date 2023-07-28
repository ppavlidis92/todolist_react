import firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/firestore';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
export default firebase;
