// NPM Package
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuOJAD8m3_dE0EeZGEwPB-2l_P5qiVRW4",
  authDomain: "bbq-restaurant-7211b.firebaseapp.com",
  projectId: "bbq-restaurant-7211b",
  storageBucket: "bbq-restaurant-7211b.appspot.com",
  messagingSenderId: "427890830372",
  appId: "1:427890830372:web:b6e919869c250b4534bcb1"
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;