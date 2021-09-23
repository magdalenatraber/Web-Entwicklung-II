"use strict";

// hier kommen ihre Skripte hin

const responseMessage = { 
    "Player": "Player 1", 
    "Cards": [ 
        { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 }, 
        { "Color": "Red", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Red", "Text": "Nine", "Value": 9, "Score": 9 }, 
        { "Color": "Red", "Text": "Reverse", "Value": 12, "Score": 20 }, 
        { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 }, 
        { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 }, 
        { "Color": "Blue", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Blue", "Text": "Seven", "Value": 7, "Score": 7 }, 
        { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 } 
    ], 
    "Score": 63 };
let farbe = "Red";//prompt("Welche Farbe wird gesucht?");
let zahl = 7;//prompt("Welche Zahl wird gesucht?")
let cardsFiltered = responseMessage.Cards.filter((Cards) => { (Cards.Color == farbe  && Cards.Value == zahl) })
console.log(cardsFiltered);
//let ergebnis = cardsFiltered.map(card => {return card.Color + " " +card.Text})
//console.log(ergebnis);