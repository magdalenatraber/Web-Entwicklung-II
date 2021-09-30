"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin
const responseMessage = { 
    "Player": "Player 1", 
    "Cards": [ 
        { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 }, 
        { "Color": "Red", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Red", "Text": "Nine", "Value": 9, "Score": 9 }, 
        { "Color": "Red", "Text": "Reverse", "Value": 1, "Score": 20 }, 
        { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 }, 
        { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 }, 
        { "Color": "Blue", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Blue", "Text": "Seven", "Value": 7, "Score": 7 }, 
        { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 } 
    ], 
    "Score": 63 };

 let cards = responseMessage.Cards.map(item=>`${item.Color.toLowerCase()[0]}${item.Value}`);
    console.log(cards);
    let button = document.getElementsByTagName("button");

    button[0].addEventListener("click", ()=> {


for (let i = 0; i < cards.length; i++) {
   let card = cards[i];
    let newElement = document.createElement("li");
    let newImg = document.createElement("img");
    newImg.src = `${baseUrl}${card}.png`;
    const liste = document.querySelector("#cards ul");
    
    const newlistitem = liste.appendChild(newElement);
    newlistitem.appendChild(newImg);
   }
    });

 /*
   let newElement = document.createElement("li");
    let newImg = document.createElement("img");
    newImg.src = `${baseUrl}${card}.png`;
    const liste = document.querySelector("#cards ul");
    
    const newlistitem = liste.appendChild(newElement);
    newlistitem.appendChild(newImg);






    let color = prompt("Welche Farbe wird gesucht?");
    let value = prompt("Welche Zahl wird gesucht?")
    let cardsFiltered = responseMessage
    .Cards.filter(item=>item.Color == color && item.Value == value )
    let ergebnis = cardsFiltered.map(item=>`${item.Color} ${item.Value}`)
    console.log(ergebnis);

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

}
);
*/