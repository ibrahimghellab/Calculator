import './style.css'

let op=array();
let value="";
let screen = document.getElementById("screen");

let mult=document.getElementById("mult");
let div=document.getElementById("div");
let min=document.getElementById("min");
let sum=document.getElementById("sum");


let buttonsNumbers= document.querySelectorAll(".number");

buttonsNumbers.forEach(element => {
    console.log(element.textContent);
});

add

function mult(){
    op.append(parseIntValue);
    value="";
    op.append("*");
}

function concatenate(text){
    
    value+=text;
    screen.textContent=value;
}


buttonsNumbers.forEach(element => {
    element.addEventListener("click",()=>{concatenate(element.textContent)});
});

mult.addEventListener("click", mult); 