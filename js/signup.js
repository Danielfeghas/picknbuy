import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";


const auth = getAuth(app)


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
const signupEmailEl = getElement("#email")
const signupPasswordEl = getElement("#password")
const signupFirstNameEl = getElement("#firstName")
const signupLastNameEL = getElement("#lastName")
const signupPhoneEL = getElement("#phoneNo")
const passErrorMessage = getElement("#error-message")

// Signup

const handleSignup = async ()=>{
    console.log("signing...");

    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,signupEmailEl.value,signupPasswordEl.value,signupFirstNameEl.value,signupLastNameEL.value,signupPhoneEL.value)
        const user = await userCredential.user
        await sendEmailVerification(user)
        console.log(user);
        if (user) {
            alert("Signup Successful")
            window.location.href = "../html/signin.html"
        }
        if (!user) {
           alert("User not created") 
           return
        }
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        if (error.code == "auth/password-does-not-meet-requirements") {
            passErrorMessage.textContent = "Password must contain an upper case character, a numeric character and non-alphanumeric character"
        } else if(error.code == "auth/email-already-in-use") {
            passErrorMessage.textContent = "Email already Exist."
        }
        
        
    }finally{
        console.log("Done!!!");
        
    }
}

signupFormEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    handleSignup()
})