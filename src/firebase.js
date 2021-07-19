import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDnXYxYGcSK-VjwmFuxEIkxYDY1HXi4-q4",
    authDomain: "slack-clone-3e763.firebaseapp.com",
    projectId: "slack-clone-3e763",
    storageBucket: "slack-clone-3e763.appspot.com",
    messagingSenderId: "813372285608",
    appId: "1:813372285608:web:cafd95f8bf498e11ce989d"
  };


    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();


    export {auth,provider,db}
