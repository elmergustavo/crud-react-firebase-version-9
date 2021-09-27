import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfP1EfDlFCLKIG4AhwZ2z1itCdkeT9FRQ",
  authDomain: "todo-e3555.firebaseapp.com",
  projectId: "todo-e3555",
  storageBucket: "todo-e3555.appspot.com",
  messagingSenderId: "790716047921",
  appId: "1:790716047921:web:a595cb52028f2e04baab10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
