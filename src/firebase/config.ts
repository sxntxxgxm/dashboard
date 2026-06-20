// Configuración de Firebase Realtime Database.
//
// PASO IMPORTANTE: reemplaza el objeto firebaseConfig con el que te da
// la consola de Firebase (Project Settings -> tus apps -> SDK setup and
// configuration -> Config). Asegúrate de que databaseURL esté presente.

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
