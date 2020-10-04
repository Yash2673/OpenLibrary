import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCwbSOHbCoifLeIGqX2Bi1Ub65rV5IFmsQ",
    authDomain: "yash-library.firebaseapp.com",
    databaseURL: "https://yash-library.firebaseio.com",
    projectId: "yash-library",
    storageBucket: "yash-library.appspot.com",
    messagingSenderId: "344265267733",
    appId: "1:344265267733:web:a180ed45b579f9208acc1c",
    measurementId: "G-36D3NDFK5S"
  };

  firebase.initializeApp(config);
  //firebase.firestore.settings({timestampsInSnapShots:true})

  export default firebase;