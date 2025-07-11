import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";

import { getFirestore,collection } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


const auth = getAuth(app)
const DB = getFirestore(app)
const userColRef = collection(DB,"users")


//Utils
const getElement =(selector)=>{
    const element = document.querySelector(selector)
    if (!element) {
        console.log(`Invalid selector:${element}`);
        return
    }
        return element;
}

//ELEMENTS
const signupFormEl = getElement("#signup-form")
const signupBtnEl = getElement("#signup-btn")
const signupEmailEl = getElement("#email")
const signupPasswordEl = getElement("#password")
const signupFirstNameEl = getElement("#firstName")
const signupLastNameEL = getElement("#lastName")
const signupPhoneEL = getElement("#phoneNo")
const passErrorMessage = getElement("#error-message")
// const loginbtn = getElement("#login-btn")

// Signup

const handleSignup = async ()=>{
    signupBtnEl.textContent= "Authenticating..."
    signupBtnEl.disabled= true
    console.log(signupEmailEl.value);
    console.log(signupPasswordEl.value);
    console.log(signupFirstNameEl.value);

    if (!signupEmailEl.value || !signupPasswordEl.value || !signupFirstNameEl) {
        passErrorMessage.textContent = "All fields required"
    } else {
        passErrorMessage.textContent = ""
    }
    
    console.log("signing...");

    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,signupEmailEl.value,signupPasswordEl.value,signupFirstNameEl.value,signupLastNameEL.value,signupPhoneEL.value)
        const user = await userCredential.user
        await sendEmailVerification(user)
        console.log(user);
        if (user) {
            alert("Signup Successful")
            window.location.href = "./signin.html"
        }
        if (!user) {
           alert("User not created") 
           return
        }
        
        console.log(user.uid);
        // COLLECT USER ID AND ADD TO THE DATABASE
        const newUser ={
            id: user.id,
            username: signupFirstNameEl.value,
            email: signupPasswordEl.value
        }

        const docRef = doc(userColRef, user.uid)
        const userSnapshot = setDoc(docRef, user)
        console.log(userSnapshot);
        
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        if (error.code == "auth/password-does-not-meet-requirements") {
            passErrorMessage.textContent = "Password must contain an upper case character, a numeric character and non-alphanumeric character"
        } else if(error.code == "auth/email-already-in-use") {
            passErrorMessage.textContent = "Email already Exist."
        }
        
        
    }finally{
          signupBtnEl.textContent = "Sign up"
          signupBtnEl.disabled = false
          console.log("Done!!!");
        
    }
}

signupFormEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    handleSignup()
})


