import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyARNhm7I5mW4rUxMBdlVleNJAJhrHw3FtU",
  authDomain: "tiktok-jornada-53d1a.firebaseapp.com",
  projectId: "tiktok-jornada-53d1a",
  storageBucket: "tiktok-jornada-53d1a.appspot.com",
  messagingSenderId: "1079679975474",
  appId: "1:1079679975474:web:de3081d0a8e37236a6fc2b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

