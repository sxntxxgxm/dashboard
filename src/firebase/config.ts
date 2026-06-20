// Configuración de Firebase Realtime Database.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1IPLk-0j2nGavUXEXLkk4b3fsTWhA_XA",
  authDomain: "dashboard-productos-ee629.firebaseapp.com",
  databaseURL: "https://dashboard-productos-ee629-default-rtdb.firebaseio.com",
  projectId: "dashboard-productos-ee629",
  storageBucket: "dashboard-productos-ee629.firebasestorage.app",
  messagingSenderId: "831650003048",
  appId: "1:831650003048:web:cdf193f38ae37aeb8a63dd",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);