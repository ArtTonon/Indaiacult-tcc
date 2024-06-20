import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkJM1SmgjIUmZgwAGkMK_-1RZm0839aEg",
  authDomain: "fotos-indaiacult.firebaseapp.com",
  projectId: "fotos-indaiacult",
  storageBucket: "fotos-indaiacult.appspot.com",
  messagingSenderId: "202857737647",
  appId: "1:202857737647:web:8614ff9eeff6cebf31135a",
  measurementId: "G-ZPQ32PQN7M",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
