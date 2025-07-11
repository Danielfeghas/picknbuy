import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {getFirestore, collection,doc,getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { app } from "./firebaseConfig.js";

const auth = getAuth(app)
const DB = getFirestore(app)
const userColRef = collection(DB, "users")
let currentUser;

// Utils
const getElement =(selector)=>{
    const element = document.querySelector(selector)
    if (!element) {
        console.log(`Invalid selector:${element}`);
        return
    }
        return element;
}

//Element
const signInEmailEL = getElement("#email")
const signInPasswordEL = getElement("#password")
const signInFormEL = getElement("#signin-form")
const errorMessageEl = getElement("#error-message")


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const docRef = doc(userColRef, user.uid)
        const userCredential =await getDoc(docRef)
        currentUser = userCredential.data()
        

    } else {
        window.location.href= "../index.html"
    }
})

const handleSignin = async()=>{
    console.log("signin...");
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth,signInEmailEL.value,signInPasswordEL.value)
        const user = await userCredential.user
        console.log(userCredential);
        console.log(user);
        
        if (user) {
            alert("Welcome")
            window.location.href = "./dashboard.html"
        }
    } catch (error) {
        console.log(error);
        console.log(error.code);
           if (error.code == "auth/invalid-credential") {
          errorMessageEl.textContent = "Email or password incorrect"
        }else if(error.code == "auth/invalid-email"){
          errorMessageEl.textContent = "Invalid email"
        }
        
    }finally{
        console.log("Done!");
        
    }
}

signInFormEL.addEventListener("submit",(e)=>{
    e.preventDefault()
    handleSignin()
})

