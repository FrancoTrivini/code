"use strict"

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll("#boton")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal--container")[0];

abrir.addEventListener("click",(e)=>{
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal--close");
});

cerrar.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.toggle("modal--close");
    setTimeout(()=>{
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },650);
});

window.addEventListener("click",(e)=>{
    e.preventDefault();
    if (e.target == modalC){
        modal.classList.toggle("modal--close");
        setTimeout(()=>{
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },650);
    }
});