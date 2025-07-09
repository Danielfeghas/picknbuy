 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyChZu2TS0CLz-2eErkzSffVywByNI9y3mM",
    authDomain: "picknbuy-cad4c.firebaseapp.com",
    projectId: "picknbuy-cad4c",
    storageBucket: "picknbuy-cad4c.firebasestorage.app",
    messagingSenderId: "64701542369",
    appId: "1:64701542369:web:4fb40ec8092fc682112ca0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export{
    app
  }