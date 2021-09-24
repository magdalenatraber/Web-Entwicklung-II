"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin

let button = document.getElementByTagName("button");

button.addEventListener("click", ()=> {
let color = document.getElementById("color").value;
let number = document.getElementById("number").value;
let card = color + " " + number;
(alert(card))});
