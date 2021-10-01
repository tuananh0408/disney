import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqcQMeQmzy5X632s2IllRlvZ0FVh99Yrc",
  authDomain: "disney-9bea6.firebaseapp.com",
  projectId: "disney-9bea6",
  storageBucket: "disney-9bea6.appspot.com",
  messagingSenderId: "638899699486",
  appId: "1:638899699486:web:92075cdab42507c79d130f",
  measurementId: "G-SEWP6NZEEV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
