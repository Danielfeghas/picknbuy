import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app)