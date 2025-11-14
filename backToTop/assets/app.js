"use strict";

const backToTop = document.querySelector(".backToTop");

if(backToTop){
window.addEventListener("scroll", showBackToTop);
}
console.log(window.innerHeight);
function showBackToTop(){
    const currentScroll = window.scrollY;
    if(currentScroll > window.innerHeight/4){
        backToTop.classList.add("backToTop--show");
        console.log(currentScroll);
    }
    else{
        backToTop.classList.remove("backToTop--show");
    }
}