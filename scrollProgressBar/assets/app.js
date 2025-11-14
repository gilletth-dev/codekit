"use strict";

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){

    const currentScroll = window.scrollY;
    const totalScroll = document.body.scrollHeight;
    const windowHeigth = window.innerHeight;
    const maxScroll = totalScroll - windowHeigth;

    const readPercentage = (currentScroll/maxScroll)*100;

    console.log(readPercentage);

    progressBar.style.setProperty("--scrollBar-width", readPercentage+"%");
    
}
