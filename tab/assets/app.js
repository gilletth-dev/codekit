"use strict";

const tabBtn = document.querySelectorAll(".tab__el");
const tabContent = document.querySelectorAll(".tab__content");
const tabLinks = document.querySelectorAll("a");

for (let i=0; i < tabLinks.length; i++){
    tabLinks[i].addEventListener("click", tabOpen);
    
    function tabOpen(){
        let contentActive = document.querySelector(".tab__content--active");
        let tabActive = document.querySelector(".tab__el--active");

        contentActive.classList.remove("tab__content--active");
        tabActive.classList.remove("tab__el--active");

        tabContent[i].classList.add("tab__content--active");
        tabBtn[i].classList.add("tab__el--active");
    }
}
