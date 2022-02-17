const currentLink = document.getElementById("nav-menu");
currentLink.style.borderBottom="2px solid #A0673C";


const btnCoffee = document.getElementById("btnCoffee");
const btnMerch = document.getElementById("btnMerch");

const displayCoffee = document.getElementById("coffee-products");
const displayMerch = document.getElementById("merch-products");

const displayCoffeeProducts = () => {
    displayCoffee.style.display = "grid";
    displayMerch.style.display = "none";
    btnCoffee.style.backgroundColor="#552c11";
    btnMerch.style.backgroundColor="#865439";
}

const displayMerchProducts = () => {
    btnMerch.style.backgroundColor="#552c11";
    btnCoffee.style.backgroundColor="#865439";
    displayMerch.style.display = "grid";
    displayCoffee.style.display = "none";
}