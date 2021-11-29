import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4zKgTWd1QfxonPUBihkFx9BeDO2SZRVE",
    authDomain: "saylani-teamreporter.firebaseapp.com",
    projectId: "saylani-teamreporter",
    storageBucket: "saylani-teamreporter.appspot.com",
    messagingSenderId: "474269595093",
    appId: "1:474269595093:web:30e922f7da9031c369795c",
    measurementId: "G-SV7MZE5185",
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }
