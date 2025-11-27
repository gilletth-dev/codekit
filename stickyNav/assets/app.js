"use strict";

const menu = document.querySelector(".menu")

let oldScrollY = 0;
window.addEventListener("scroll", scrollListener);

function scrollListener(){
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    const isScrollingUp = oldScrollY > currentScroll;
    const isAtTop = currentScroll === 0;
    const isAtBottom = currentScroll === maxScroll;

    if(isScrollingUp || isAtTop || isAtBottom){
        menu.classList.remove("menu--hide");
    } else {
        menu.classList.add("menu--hide");
    }
    
    oldScrollY = currentScroll;
}