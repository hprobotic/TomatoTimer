import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBmPV-ZnudHui8JmnMR6ZAKy43U_64IFvs',
  authDomain: 'tomato-timer-29c5d.firebaseapp.com',
  databaseURL: 'https://tomato-timer-29c5d.firebaseio.com',
  projectId: 'tomato-timer-29c5d',
  storageBucket: '',
  messagingSenderId: '141760203101'
}

var fire = firebase.initializeApp(config)
export default fire
