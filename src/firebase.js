import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBTe2ODScQ_o6Fi6vV1E4ibTB5YwVKL4u8',
  authDomain: 'portfolio-3e6fd.firebaseapp.com',
  databaseURL: 'https://portfolio-3e6fd.firebaseio.com',
  projectId: 'portfolio-3e6fd',
  storageBucket: 'portfolio-3e6fd.appspot.com',
  messagingSenderId: '816206858007'
}

let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

export default db
