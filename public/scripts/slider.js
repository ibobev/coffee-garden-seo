const robusta = document.getElementById("robusta");
const liberica = document.getElementById("liberica");
const arabica = document.getElementById("arabica");

robusta.style.left="-340px";
liberica.style.left = "40px";
arabica.style.left = "420px";

const moveLeft = () => {
    
    if(robusta.style.left === "40px"){
        arabica.style.left = "420px";
        robusta.style.left="-340px";
        liberica.style.left = "40px";
        return;
    }
    if(liberica.style.left === "40px"){
        robusta.style.left="420px";
        liberica.style.left = "-340px";
        arabica.style.left = "40px";
        return;
    }
    if(arabica.style.left === "40px"){
        liberica.style.left = "420px";
        arabica.style.left = "-340px";
        robusta.style.left="40px";
        return;
    }
}

const moveRight = () => {
    if(robusta.style.left === "40px"){
        robusta.style.left="420px";
        liberica.style.left = "-340px";
        arabica.style.left = "40px";
        return;
    }
    if(liberica.style.left === "40px"){
        robusta.style.left="40px";
        liberica.style.left = "420px";
        arabica.style.left = "-340px";
        return;
    }
    if(arabica.style.left === "40px"){
        robusta.style.left="-340px";
        liberica.style.left = "40px";
        arabica.style.left = "420px";
        return;
    }
}


