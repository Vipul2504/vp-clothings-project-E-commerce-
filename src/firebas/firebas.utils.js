import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCG1Yf-G4kWoWYXE1pDEkXC8uOybosZboE",
    authDomain: "vp-clothings.firebaseapp.com",
    projectId: "vp-clothings",
    storageBucket: "vp-clothings.appspot.com",
    messagingSenderId: "1097749448975",
    appId: "1:1097749448975:web:564b12aa6674e45344d67a",
    measurementId: "G-Y2DBN3J94V"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.messsage);
      }
    }

    return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase
  