import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyxCFNUSmyygAPodKaHIyQB5nhr4EBBXw",
    authDomain: "whatsapp-clone-c4088.firebaseapp.com",
    projectId: "whatsapp-clone-c4088",
    storageBucket: "whatsapp-clone-c4088.appspot.com",
    messagingSenderId: "591445159492",
    appId: "1:591445159492:web:f8c8d44249eafc44bad611",
    measurementId: "G-YTDELZEX9C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;