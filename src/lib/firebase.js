// firebase.js (for Firebase v9+)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

// Get Firestore and Storage instances
const db = getFirestore(app);
const storage = getStorage(app);

// getAuth() validates the API key the moment it runs, so it must not be called
// at module load: every page that imports db would then fail to prerender in
// any environment without the Firebase env vars. Callers ask for it from the
// browser instead.
let authInstance;
export function getAuthClient() {
  if (!authInstance) authInstance = getAuth(app);
  return authInstance;
}

export { db, storage };
