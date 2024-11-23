import './style.css'

let op=new Array();
let value="";
let valueDisplayed="";
let screen = document.getElementById("screen");

let mult=document.getElementById("mult");
let div=document.getElementById("div");
let sub=document.getElementById("min");
let sum=document.getElementById("sum");

let equal=document.getElementById("result");

let result=0;

let buttonsNumbers= document.querySelectorAll(".number");

buttonsNumbers.forEach(element => {
    console.log(element.textContent);
});


function operation(ope){
    op.push(parseInt(value));
    value="";
    valueDisplayed+=ope;
    screen.textContent=valueDisplayed;
    op.push(ope);
    console.log(op);
}

function concatenate(text){
    value+=text;
    valueDisplayed+=text;
    screen.textContent=valueDisplayed;
}

function equalPressed(){
    /*switch(o){
        case "*":
            
            break;
        case "/":

            break;
        case "+":

            break;
        case "-":

            break;
        
    }*/
   screen.textContent+=math.evaluate(valueDisplayed);
}

buttonsNumbers.forEach(element => {
    element.addEventListener("click",()=>{concatenate(element.textContent)});
});

mult.addEventListener("click", ()=>{operation("*")}); 
div.addEventListener("click", ()=>{operation("/")}); 
sub.addEventListener("click", ()=>{operation("-")}); 
sum.addEventListener("click", ()=>{operation("+")}); 

equal.addEventListener("click",()=>{equalPressed()});