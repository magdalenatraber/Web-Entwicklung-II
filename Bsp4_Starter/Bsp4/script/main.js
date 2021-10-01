"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin



let erstellen = document.getElementById("Erstellen");
let löschen = document.getElementById("Löschen");
let filterlöschen = document.getElementById("Filter-Löschen");
const liste = document.querySelector("#cards ul");

erstellen.addEventListener("click", ()=> {

let color = document.getElementById("color").value;
let number = document.getElementById("number").value;
let card = color[0]  + number;

let newElement = document.createElement("li");
let newImg = document.createElement("img");
newImg.src = `${baseUrl}${card}.png`;

console.log(liste);
const newlistitem = liste.appendChild(newElement);
newlistitem.appendChild(newImg);

});
 löschen.addEventListener("click", ()=>{
 let lastElement = liste.lastChild;
 liste.removeChild(lastElement);
 
 }
 )
 

 filterlöschen.addEventListener("click", ()=> {

    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;
    let card = color[0]  + number;
    console.log(liste.childNodes);
    for (let index = 1; index < liste.childNodes.length; index++) {
        let node =  liste.childNodes[index];
        if(node.firstChild.src == `${baseUrl}${card}.png`){
        liste.removeChild(node);
        }
        
    }



 })