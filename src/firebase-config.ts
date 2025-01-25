import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDxMA4tzKRuM779NVGeWnWr2qUeWPwt7Po",
  authDomain: "blog-admin-e1721.firebaseapp.com",
  projectId: "blog-admin-e1721",
  storageBucket: "blog-admin-e1721.firebasestorage.app",
  messagingSenderId: "771920107262",
  appId: "1:771920107262:web:9ea27b2560647adc8f77af",
  measurementId: "G-N0EF5E3X2N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
