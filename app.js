var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

let x = 0, y = 0;

let out = document.querySelector("#output");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function input(){
    x = parseFloat(input1.value);
    y = parseFloat(input2.value);    
}

function addition(){
    input();
    out.value = x + y;
}

function subtraction(){
    input();
    out.value = x - y;
}

function multiplication(){
    input();
    out.value = x * y;
}

function division(){
    input();
    out.value = x / y;
}

add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);

