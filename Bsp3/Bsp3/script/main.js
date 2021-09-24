"use strict";

// hier kommen ihre Skripte hin

const responseMessage = { 
    "Player": "Player 1", 
    "Cards": [ 
        { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 }, 
        { "Color": "Red", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Green", "Text": "Nine", "Value": 9, "Score": 9 }, 
        { "Color": "Green", "Text": "Reverse", "Value": 12, "Score": 20 }, 
        { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 }, 
        { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 }, 
        { "Color": "Yellow", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Yellow", "Text": "Seven", "Value": 7, "Score": 7 }, 
        { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 } 
    ], 
    "Score": 63 };

const color = prompt("Welcher Farbe (Red/Green/Blue/Yellow)?");
const value = prompt("Welche Zahl 0-9?");
const cards = responseMessage.Cards
    .filter(item=>item.Color == color && item.Value == value)
    .map(item=>`${item.Color} ${item.Value}`);
console.log(cards);