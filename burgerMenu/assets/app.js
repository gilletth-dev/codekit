"use strict"; 

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);
    console.log("click");
}
function menuOpen(){
    menu.classList.toggle("menu--open");
    console.log("menu open");
}

//quand on clique sur un des liens le menu se refmerme