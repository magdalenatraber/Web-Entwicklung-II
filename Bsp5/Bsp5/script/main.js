"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

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

function getCards(){
    return responseMessage;
}
document.querySelector("#cards ul").addEventListener("mouseover", function(event){
    console.log(event.target.tagName);
    if (event.target.tagName === "IMG"){
        event.target.classList.add("selected");
    }
});

document.querySelector("#cards ul").addEventListener("mouseout", function(event){
    if (event.target.tagName === "IMG"){
        event.target.classList.remove("selected");
    }    
});

document.getElementById("color").addEventListener("keydown", function(event){
    let valid = true;
    if (["r", "g", "b", "y"].indexOf(event.key) < 0) {
        valid = false;
    }

    if (event.target.value.length > 0){
        valid = false;
    }

    if (!valid && event.code != 8)
        event.preventDefault();
});

document.getElementById("number").addEventListener("keydown", function(event){
    let valid = true;
    if (!Number(event.key)) {
        valid = false;
    }

    if (event.target.value.length > 0){
        valid = false;
    }

    if (!valid && event.code != 8)
        event.preventDefault();
});

document.getElementsByTagName("button")[0].addEventListener("click", function(){
    // const colorInput = document.getElementById("color");
    // const numberInput = document.getElementById("number");

    const response = getCards();
    const ul = document.querySelector("#cards ul");

    response.Cards.map(function(el){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const card = `${el.Color.slice(0,1).toLowerCase()}${convertNumber(el.Value)}`;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
        ul.appendChild(li);
    });
});

function convertNumber(cardValue){
    if (cardValue < 10)
        return cardValue;
    
    switch(cardValue){
        case 10: return "d2";
        case 11: return "s";
        case 12: return "r";
        case 13: return "wd4";
        case 14: return "wild";
    }
}