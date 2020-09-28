import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnSR7eySYRDaCGOmTaLy0HVbkBzKKk5RU",
    authDomain: "whatsappclone-new-4e52f.firebaseapp.com",
    databaseURL: "https://whatsappclone-new-4e52f.firebaseio.com",
    projectId: "whatsappclone-new-4e52f",
    storageBucket: "whatsappclone-new-4e52f.appspot.com",
    messagingSenderId: "981260871280",
    appId: "1:981260871280:web:19125f2882419a3e03f6b5",
    measurementId: "G-BGR8YF85NH"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const  provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;