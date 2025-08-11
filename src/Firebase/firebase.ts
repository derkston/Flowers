import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const app = initializeApp({
	apiKey: "AIzaSyAo518IvIf7IIy7rERtZwv8aOSbUEx6T44",
	authDomain: "flowers-1dbfb.firebaseapp.com",
	projectId: "flowers-1dbfb",
	databaseURL: "https://flowers-1dbfb-default-rtdb.europe-west1.firebasedatabase.app",
	storageBucket: "flowers-1dbfb.firebasestorage.app",
	messagingSenderId: "964588681468",
	appId: "1:964588681468:web:55d744d9f8255430f2bf79",
	measurementId: "G-EWTFH1YXG7"
});
export const db = getDatabase(app); // Используем 'db' для краткости и ясности
export { app }
export const auth = getAuth(app);