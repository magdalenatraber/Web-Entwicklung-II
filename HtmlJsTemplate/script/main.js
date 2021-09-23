"use strict";

// hier kommen ihre Skripte hin
const a = Math.random();
const b = Math.random();

console.log(a);
console.log(b);

const operation = prompt("Operation: +-*/");
let result;
switch (operation) {
    case "+":
        result = add(a, b);
        break;

    case "-":
        result = sub(a, b);
        break;

    case "*":
        result = mul(a, b);
        break;

    case "/":
        result = div(a, b);
        break;
}

console.log(result);

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;

    
}