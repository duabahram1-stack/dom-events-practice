let display = document.getElementById("display");

let numbers = document.querySelectorAll(".number");

let operators = document.querySelectorAll(".operator");

let equalBtn = document.querySelector(".equal");

let clearBtn = document.querySelector(".clear");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

//nums btns
numbers.forEach(button => {
    button.addEventListener("click",() => {
        if(!isSecond){
            firstNumber += button.innerText;
            display.value = firstNumber;
        }else{
            secondNumber += button.innerText;
            display.value = secondNumber;
        }
    });
});

//oprtr btns 
operators.forEach(button => {
    button.addEventListener("click",() => {
operator = button.innerText;
isSecond = true;
    });
});


//equal btn 

equalBtn.addEventListener("click",() => {
 let result;  

 let num1 = Number(firstNumber);
 let num2 = Number(secondNumber);

if(operator === "+") result = num1 + num2;
if(operator === "-") result = num1 - num2;
if(operator === "*") result = num1 * num2;
if(operator === "/") result = num1 / num2;
 
display.value = result;

firstNumber = result.toString();
secondNumber = "";
isSecond = false;
});


//clear btn

clearBtn.addEventListener("click",() => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecond = false;
    display.value = "";
});