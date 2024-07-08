import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDTzA85CNOUkNZFbZR99GBGPWuZpAcdhow",
    authDomain: "workforce-24.firebaseapp.com",
    databaseURL: "https://workforce-24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "workforce-24",
    storageBucket: "workforce-24.appspot.com",
    messagingSenderId: "306470076699",
    appId: "1:306470076699:web:58740e7f3b8a5acce4d3be",
    measurementId: "G-X29EFQSKKY"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export{firebaseApp};