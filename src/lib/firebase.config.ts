import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjPtFlVCxPKfSZcLKOwj9fb0bDjfZwp44",
  authDomain: "tech-net-17dea.firebaseapp.com",
  projectId: "tech-net-17dea",
  storageBucket: "tech-net-17dea.appspot.com",
  messagingSenderId: "525156196623",
  appId: "1:525156196623:web:a69ec59713003733ce1e7a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
