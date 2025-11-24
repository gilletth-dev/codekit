"use strict";

const dropBtn = document.querySelector(".dropdown");
const dropMenu = document.querySelector(".dropdown__content");
const dropLinks = document.querySelectorAll(".dropdown__el");

dropBtn.addEventListener("mouseover", dropOpen);

function dropOpen(){
    dropMenu.classList.add("dropdown__content--show")

    dropBtn.addEventListener("mouseout", function(){
        dropMenu.classList.remove("dropdown__content--show")
    })
}


for (let i = 0; i < dropLinks.length; i++) {
    dropLinks[i].addEventListener("click", function(){
        console.log("click");
        dropMenu.classList.remove("dropdown__content--show");
    });
}

