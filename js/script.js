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
const ProductListEl = getElement("#product-list")
const gridEl = getElement(".productList")
const womenLinkEl = getElement("#womenLink")
const menLinkEl = getElement("#menLink")
const electLinkEl = getElement("#electLink")
const jeweryLinkEl = getElement("#jeweryLink")
const productCard = getElement(".productCard")
const display = getElement("#display")
// const signupLastNameEL = getElement("#lastName")
// const signupPhoneEL = getElement("#phoneNo")
// const passErrorMessage = getElement("#error-message")

const baseURL = "https://fakestoreapi.com/products"

// GET ALL PRODUCTS

// LOAD WOMEN PRODUCTS

const loadWomenProducts = async () => {
    console.log("Loading...");
    display.innerHTML = ""
    try {
        const response = await fetch(`${baseURL}/category/women%27s%20clothing`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
           <div class="productList">
                 <div class="image-div">
                    <img src="${ele.image}" >
                 </div>
                 <h2>${ele.title}</h2>
                 <p>$${ele.price}</p>
           </div>
            `
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        console.log("Done!");
        
    }
}
womenLinkEl.addEventListener("click",loadWomenProducts)

loadWomenProducts()


// LOAD MEN PRODUCTS

const loadMenProducts = async () => {
    console.log("Loading...");
    display.innerHTML = ""
    try {
        const response = await fetch(`${baseURL}/category/men%27s%20clothing`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.toggle("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
           <div class="productList">
                 <div class="image-div">
                    <img src="${ele.image}" >
                 </div>
                 <h2>${ele.title}</h2>
                 <p>$${ele.price}</p>
           </div>
            `
            display.appendChild(card)
        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        console.log("Done!");
        
    }
}
menLinkEl.addEventListener("click",loadMenProducts)

loadMenProducts()




// LOAD ELECTRONICS PRODUCTS

const loadElectProducts = async () => {
    console.log("Loading...");
    display.innerHTML = ""
    try {
        const response = await fetch(`${baseURL}/category/electronics`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
           <div class="productList">
                 <div class="image-div">
                    <img src="${ele.image}" >
                 </div>
                 <h2>${ele.title}</h2>
                 <p>$${ele.price}</p>
           </div>
            `
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        console.log("Done!");
        
    }
}
electLinkEl.addEventListener("click",loadElectProducts)

loadElectProducts()


//LOAD JEWERY PRODUCTS

const loadJeweryProducts = async () => {
    console.log("Loading...");
    display.innerHTML = ""
    try {
        const response = await fetch(`${baseURL}/category/jewelery`)
        const data = await response.json()
        console.log(data);
        const card= document.createElement("div")
        card.classList.add("card")
        data.forEach((ele,index) => {
            card.innerHTML += `
           <div class="productList">
                 <div class="image-div">
                    <img src="${ele.image}" >
                 </div>
                 <h2>${ele.title}</h2>
                 <p>$${ele.price}</p>
           </div>
            `
            display.appendChild(card)

        });
        
    } catch (error) {
        console.log(error);
        console.log(error.code);
        
        
    }finally{
        console.log("Done!");
        
    }
}
jeweryLinkEl.addEventListener("click",loadJeweryProducts)

loadJeweryProducts()