"use strict"; 

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll("a");

if(menuToggle){
    //click btn
    menuToggle.addEventListener("click", menuOpen);

    //click liens
    for (let i=0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener("click", menuOpen)
}
}

//toggle du menu
function menuOpen(){
    menu.classList.toggle("menu--open");
    console.log("menu open");
}