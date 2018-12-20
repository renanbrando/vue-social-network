import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTCnuZo_h5_h2VgSFVWz4rkY8CiUG17Fw",
    authDomain: "social-app-ad4ed.firebaseapp.com",
    databaseURL: "https://social-app-ad4ed.firebaseio.com",
    projectId: "social-app-ad4ed",
    storageBucket: "social-app-ad4ed.appspot.com",
    messagingSenderId: "103643261808"
  };

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}