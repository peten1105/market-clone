import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // apiKey: "AIzaSyD0niclABD5QrtzW8Bor1od5lefAHs42Ss",
  // authDomain: "carrot-market-test-b71b4.firebaseapp.com",
  // databaseURL:
  //   "https://carrot-market-test-b71b4-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "carrot-market-test-b71b4",
  // storageBucket: "carrot-market-test-b71b4.appspot.com",
  // messagingSenderId: "476940876901",
  // appId: "1:476940876901:web:a08119fa11fa3aa4e79a8c",

  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const auth = getAuth(app);
