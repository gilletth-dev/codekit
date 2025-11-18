"use strict"; 

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll("a");

menu.classList.remove("menu--open");

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
    document.body.classList.toggle("no-scroll");
    console.log("menu open");
}