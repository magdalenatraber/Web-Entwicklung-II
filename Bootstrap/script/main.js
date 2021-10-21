"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin

let players = ["Magdalena(1)","Stefanie(2)", "Caroline(3)", "Hansi(4)"];
let playertag = document.getElementById("player");
let nextplayer = document.getElementById("next");
console.log(players[0])
let count = 0;
let newElement = document.createElement("p");
newElement.innerHTML = players[count];
playertag.appendChild(newElement);

function uzs(){
    if(count == 3)
    count = 0;
    else
    count++;

}

function counteruzs(){
    if(count == 0)
    count = 3;
    else
    count--;
}
let direction = "uzs";

nextplayer.addEventListener("click", ()=> {
if(direction == "uzs"){
uzs();
} else {
    counteruzs();
}
let lastchild = playertag.lastChild;
playertag.removeChild(lastchild);
let newElement = document.createElement("p");
newElement.innerHTML = players[count];
playertag.appendChild(newElement);
}
)
let changedirection = document.getElementById("changedirection");

changedirection.addEventListener("click", ()=> {
if(direction == "uzs"){
    direction = "counteruzs"
} else
direction = "uzs"})
