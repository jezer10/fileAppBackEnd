const firebase = require("firebase/app");
require('firebase/firestore')
require('firebase/storage')
require('firebase/auth')
require('firebase/database')


const firebaseConfig = {
    apiKey: "AIzaSyDmwMWmR0TSnua171Nr8COKMDXu-uv6wYA",
    authDomain: "cualquiercosa-5537f.firebaseapp.com",
    projectId: "cualquiercosa-5537f",
    storageBucket: "cualquiercosa-5537f.appspot.com",
    messagingSenderId: "351389463037",
    appId: "1:351389463037:web:6ab554f8c1832437a92994",
    measurementId: "G-8VMH5M2KYZ"
}

firebase.initializeApp(firebaseConfig)
module.exports = firebase