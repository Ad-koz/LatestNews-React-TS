
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNHlzmMJOgzj3x7LMhuJhIzvqzvvEDITo",
  authDomain: "sda-news-1eaf7.firebaseapp.com",
  projectId: "sda-news-1eaf7",
  storageBucket: "sda-news-1eaf7.appspot.com",
  messagingSenderId: "832942673451",
  appId: "1:832942673451:web:4585f09fb4c16e36a4646e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage= getStorage(app);