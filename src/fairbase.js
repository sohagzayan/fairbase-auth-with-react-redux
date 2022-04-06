import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAvksQwPUmYknwEjl9WrTYKhCuyNqTEWGk",
  authDomain: "fair-base-auth-with-redux.firebaseapp.com",
  projectId: "fair-base-auth-with-redux",
  storageBucket: "fair-base-auth-with-redux.appspot.com",
  messagingSenderId: "1012815888450",
  appId: "1:1012815888450:web:bfc5eb9b860cfec75e6ddb"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const googleAuthProvider =  new firebase.auth.googleAuthProvider()
const facebookAuthProvider = new firebase.auth.facebookAuthProvider()
export { auth, googleAuthProvider, facebookAuthProvider };
