"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin

let button = document.getElementsByTagName("button");

button[0].addEventListener("click", ()=> {
let color = document.getElementById("color").value;
let number = document.getElementById("number").value;
let card = color[0]  + number;

let newElement = document.createElement("li");
let newImg = document.createElement("img");
newImg.src = `${baseUrl}${card}.png`;
const liste = document.querySelector("#cards ul");

const newlistitem = liste.appendChild(newElement);
newlistitem.appendChild(newImg);

});
