const headerNavigation = document.querySelector(".header-navigation");

window.onscroll = () => {
    let top = window.scrollY;
    if(top >= 200){
        headerNavigation.classList.add("active");
    }else{
        headerNavigation.classList.remove("active");
    }
}

let isMenuOpen = false;

const mobileNav = document.getElementById("mobile-nav");

const displayMenu = () => {
    if(!isMenuOpen){
        mobileNav.style.display="block";
        
    }
}

const closeMenu = () => {
    isMenuOpen = false;
    mobileNav.style.display="none";
}