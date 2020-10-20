import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBGkJQNVmq8JZ1dgt-nhRbUXW9wwbA_mS4',
  authDomain: 'crwn-db-9e231.firebaseapp.com',
  databaseURL: 'https://crwn-db-9e231.firebaseio.com',
  projectId: 'crwn-db-9e231',
  storageBucket: 'crwn-db-9e231.appspot.com',
  messagingSenderId: '882545655010',
  appId: '1:882545655010:web:419f10b7f4b0c6387872bb',
  measurementId: 'G-57P1RWK9SS'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
