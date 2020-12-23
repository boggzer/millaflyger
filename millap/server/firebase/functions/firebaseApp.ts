import { firebase, config } from './config/firebase-config';

const firebaseApp = firebase.initializeApp(config);

const firebaseDb = firebaseApp.firestore();

export { firebaseDb, firebaseApp };
