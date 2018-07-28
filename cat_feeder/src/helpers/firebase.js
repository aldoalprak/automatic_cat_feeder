const firebase = require("firebase");
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'


const config = {
    apiKey: "AIzaSyBds4d-9nFOlm6e5g55xevFOeu4uyS78ck",
    authDomain: "catfeeder-bot.firebaseapp.com",
    databaseURL: "https://catfeeder-bot.firebaseio.com",
    projectId: "catfeeder-bot",
    storageBucket: "catfeeder-bot.appspot.com",
    messagingSenderId: "1051892162795"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.database();
const user = firebaseApp.auth();
const storageRef = firebaseApp.storage()

export { db, user, storageRef }