"use strict";

// hier kommen ihre Skripte hin
let eingabefeld = document.getElementById("input");
let liste = document.querySelector("#cards ul");
eingabefeld.addEventListener("focus", () => {
eingabefeld.classList.add("selected");
})

eingabefeld.addEventListener("blur", () => {
eingabefeld.classList.remove("selected");
    } )

eingabefeld.addEventListener("keydown", (e) => {
if (e.keyCode == 13)
addpictures();
})

function addpictures(){
    let text = eingabefeld.value;
text.split('').forEach(c => {
    console.log(c);
    let newElement = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = c;  
    let liste = document.querySelector("#cards ul");

    let newlistitem = liste.appendChild(newElement);
    newlistitem.appendChild(button);

} );
}
/*
for (let node of liste.childNodes){
    if(event.target.innerHTML == node.innerHTML)    */

liste.addEventListener("mouseover", () => {
 
        event.target.classList.add("button");


    }
    
   

      
);

