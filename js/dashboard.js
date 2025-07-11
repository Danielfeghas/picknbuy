import { getAuth,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore,collection,doc,getDoc,addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app)
const DB = getFirestore(app)
const userColRef = collection(DB,"users")
let currentUser;



onAuthStateChanged(auth, async ()=>{
    if (user) {
        const docRef = doc(userColRef, user.uid)
        const userCredential =await getDoc(docRef)
        currentUser= userCredential.data()
        usernameEl.textContent = currentUser.username
    } else {
        window.location.href= "./signin.html"
    }
});







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

const womenLinkEl = getElement("#womenLink")
const menLinkEl = getElement("#menLink")
const electLinkEl = getElement("#electLink")
const jeweryLinkEl = getElement("#jeweryLink")
const usernameEl = getElement("#username")
const signoutEl = getElement("#signout")
const display = getElement("#display")

const baseURL = "https://fakestoreapi.com/products"


window.onload = async () => {
    womenLinkEl.style.color = "red"
    await loadWomenProducts()
}

// LOAD WOMEN PRODUCTS

const loadWomenProducts = async () => {
    
    display.innerHTML = ""
    spinner.classList.remove("d-none")
    try {
        const response = await fetch(`${baseURL}/category/women%27s%20clothing`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                  </div>
                </div>
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                     
                  </div>
                </div>
                 
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        spinner.classList.add("d-none")
        
    }
}

womenLinkEl.addEventListener('click', async (event)=>{
    event.preventDefault();
    await loadWomenProducts();

    womenLinkEl.style.color = 'red';
    menLinkEl.style.color = 'gray';
    electLinkEl.style.color = 'gray';
    jeweryLinkEl.style.color = 'gray';
});
// womenLinkEl.addEventListener("click",loadWomenProducts)




// LOAD MEN PRODUCTS




const loadMenProducts = async () => {
    display.innerHTML = ""

    spinner.classList.remove("d-none")

    try {
        const response = await fetch(`${baseURL}/category/men%27s%20clothing`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                  </div>
                </div>
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                     
                  </div>
                </div>
                 
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        spinner.classList.add("d-none")
        
    }
}

menLinkEl.addEventListener('click', async (event)=>{
    event.preventDefault();
    await loadMenProducts();

    womenLinkEl.style.color = 'gray';
    menLinkEl.style.color = 'red';
    electLinkEl.style.color = 'gray';
    jeweryLinkEl.style.color = 'gray';
});





// LOAD ELECTRONICS PRODUCTS

const loadElectProducts = async () => {
    
    display.innerHTML = ""

    spinner.classList.remove("d-none")

    try {
        const response = await fetch(`${baseURL}/category/electronics`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                  </div>
                </div>
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                     
                  </div>
                </div>
                 
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        spinner.classList.add("d-none")
        
    }
}

electLinkEl.addEventListener('click', async (event)=>{
    event.preventDefault();
    await loadElectProducts();

    womenLinkEl.style.color = 'gray';
    menLinkEl.style.color = 'gray';
    electLinkEl.style.color = 'red';
    jeweryLinkEl.style.color = 'gray';
});



//LOAD JEWERY PRODUCTS



const loadJeweryProducts = async () => {
    
    display.innerHTML = ""

    spinner.classList.remove("d-none")
    
    try {
        const response = await fetch(`${baseURL}/category/jewelery`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                  </div>
                </div>
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
        data.forEach((ele,index) => {
            card.innerHTML += `
                <div class="pdt">
                    <img src="${ele.image} " class="card-img-top"" >
                  <div class="card-body">
                     <h2>${ele.title}</h2>
                     <p>$${ele.price} <i class="fa-regular fa-heart"></i></p>
                     <button class="card-btn">Preview</button>
                     
                     
                  </div>
                </div>
                 
           
            `
             const quickViewButton = card.querySelector('.card-btn');
            quickViewButton.addEventListener('click', (event) => view(event));
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        spinner.classList.add("d-none")
        
    }
}

jeweryLinkEl.addEventListener('click', async (event)=>{
    event.preventDefault();
    await loadJeweryProducts();

    womenLinkEl.style.color = 'gray';
    menLinkEl.style.color = 'gray';
    electLinkEl.style.color = 'gray';
    jeweryLinkEl.style.color = 'red';
});



















 const handleLogOut =async ()=>{
    console.log("Logging Out...");
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error);
        
    }
 }
 signoutEl.addEventListener("click",handleLogOut)