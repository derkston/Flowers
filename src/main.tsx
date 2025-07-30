import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App.tsx'
import './index.css'

const app = initializeApp({
  apiKey: "AIzaSyAo518IvIf7IIy7rERtZwv8aOSbUEx6T44",
  authDomain: "flowers-1dbfb.firebaseapp.com",
  projectId: "flowers-1dbfb",
  storageBucket: "flowers-1dbfb.firebasestorage.app",
  messagingSenderId: "964588681468",
  appId: "1:964588681468:web:55d744d9f8255430f2bf79",
  measurementId: "G-EWTFH1YXG7"
});
export const auth = getAuth(app)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
