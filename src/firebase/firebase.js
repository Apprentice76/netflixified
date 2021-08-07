import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const conf = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

app.initializeApp(conf)

const firebaseDb = app.database()
const firebaseAuth = app.auth()

export {
    firebaseDb,
    firebaseAuth
}

export default firebaseDb