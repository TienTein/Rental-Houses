import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1ugLVyp8s910CENqhs43JyumCmEjpchU",
  authDomain: "renthouses-15552.firebaseapp.com",
  projectId: "renthouses-15552",
  storageBucket: "renthouses-15552.appspot.com",
  messagingSenderId: "596323903290",
  appId: "1:596323903290:web:1673821e5429d38547d203",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
