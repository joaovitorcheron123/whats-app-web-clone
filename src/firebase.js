// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlPFyuMVc06jZ7N4VYLHItDG8iJxDsZ70",
  authDomain: "whatsapp-clone-58ed9.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-58ed9.firebaseio.com",
  projectId: "whatsapp-clone-58ed9",
  storageBucket: "whatsapp-clone-58ed9.appspot.com",
  messagingSenderId: "879759526416",
  appId: "1:879759526416:web:bc5c482eaf4b8fe5cfd895",
  measurementId: "G-8E9ZDB7KJ0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;