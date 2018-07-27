const firebase = require("firebase");
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'


const config = {
    apiKey: "AIzaSyBkLnPgKCIo0ZiDLfZ5EHbzO0iImwSRNdU",
    authDomain: "catfeeder-38829.firebaseapp.com",
    databaseURL: "https://catfeeder-38829.firebaseio.com",
    projectId: "catfeeder-38829",
    storageBucket: "catfeeder-38829.appspot.com",
    messagingSenderId: "99979817127"
}

firebase.initializeApp(config);

const db = firebase.database();

export default db