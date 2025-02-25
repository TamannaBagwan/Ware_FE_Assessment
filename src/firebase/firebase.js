import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4mi-p2YKKmO4NDKJjbb_dxLxIlRDC9Nc",
    authDomain: "ware-innovation.firebaseapp.com",
    projectId: "ware-innovation",
    storageBucket: "ware-innovation.firebasestorage.app",
    messagingSenderId: "462186293524",
    appId: "1:462186293524:web:9c86123cc508100bc4ba01"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const firestore = firebase.firestore()