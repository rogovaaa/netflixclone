
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyDM3Sx8CfvfayVoFKoQ3svEsFuy_lkaE08",
//   authDomain: "netflixclone-fb65d.firebaseapp.com",
//   projectId: "netflixclone-fb65d",
//   storageBucket: "netflixclone-fb65d.appspot.com",
//   messagingSenderId: "791813204060",
//   appId: "1:791813204060:web:07ff565fefa7c323231e99",
//   measurementId: "G-FDGV7X8ZFV"
// };


// const app = initializeApp(firebaseConfig);
// export const firebaseAuth=getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDtHmUzL9oAVeHKTowUW8BYSRHcxhV4mOc",
  authDomain: "netfl-44394.firebaseapp.com",
  projectId: "netfl-44394",
  storageBucket: "netfl-44394.appspot.com",
  messagingSenderId: "354593416394",
  appId: "1:354593416394:web:e7e71e06a797ea636d0033",
  measurementId: "G-GWM9E9WKRN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)