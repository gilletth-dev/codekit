"use strict";

const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

function nextSlide(){
    const elShow = document.querySelector(".slider__el--show");
    const elNext = elShow.nextElementSibling;
   
    elShow.classList.remove("slider__el--show");
    if(elNext){
        elNext.classList.add("slider__el--show");
    } else{
        const elFirst = elShow.parentElement.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
    
}

function prevSlide(){
    const elShow = document.querySelector(".slider__el--show");
    const elPrev = elShow.previousElementSibling;
   
    elShow.classList.remove("slider__el--show");
    if(elPrev){
        elPrev.classList.add("slider__el--show");
    } else{
        const elLAst = elShow.parentElement.lastElementChild;
        elLAst.classList.add("slider__el--show");
    }
}


