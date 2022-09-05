import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAXPgC124tX8JqBI-pusxVMSD1zeaGDAuc",
    authDomain: "olx-clone-b059f.firebaseapp.com",
    projectId: "olx-clone-b059f",
    storageBucket: "olx-clone-b059f.appspot.com",
    messagingSenderId: "246832057248",
    appId: "1:246832057248:web:94655b6e157f0e3992b2c5",
    measurementId: "G-CEZCLKCXH7"
  };

  export default firebase.initializeApp(firebaseConfig);