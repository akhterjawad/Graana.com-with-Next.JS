import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBkCkYJC_TD-Vvrnh1Y_XIUI40Mf_ZixCY",
  authDomain: "graana121.firebaseapp.com",
  projectId: "graana121",
  storageBucket: "graana121.appspot.com",
  messagingSenderId: "971777088971",
  appId: "1:971777088971:web:ba5d070faebe77bb166a4e",
  measurementId: "G-D81QS06R3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app