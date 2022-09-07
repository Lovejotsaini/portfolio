import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


var firebaseApp = initializeApp({
    apiKey: "AIzaSyDdMP0Cm-h_fuVMbr9DVFaeQexUsDPWhLw",
    authDomain: "myportfolio-2afc5.firebaseapp.com",
    databaseURL: "https://myportfolio-2afc5-default-rtdb.firebaseio.com",
    projectId: "myportfolio-2afc5",
    storageBucket: "myportfolio-2afc5.appspot.com",
    messagingSenderId: "15728080284",
    appId: "1:15728080284:web:f2417645bb830847058459",
    measurementId: "G-SYH548CKP5"
});
var db = getFirestore(firebaseApp);


export { db }
