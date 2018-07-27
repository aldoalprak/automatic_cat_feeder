import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBds4d-9nFOlm6e5g55xevFOeu4uyS78ck",
    authDomain: "catfeeder-bot.firebaseapp.com",
    databaseURL: "https://catfeeder-bot.firebaseio.com",
    projectId: "catfeeder-bot",
    storageBucket: "catfeeder-bot.appspot.com",
    messagingSenderId: "1051892162795"
}

firebase.initializeApp(config);

const db = firebase.database();

export default db




