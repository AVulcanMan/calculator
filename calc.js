// Variables involved in the operation
let firstNum;
let signValue;
let secondNum;
let answer;
let displayed;

//Variable that will determine if an operation is currently going on
let clicked = 0;

//Important body elements
const display = document.getElementById ('display');
const buttons = document.querySelectorAll('.displayed');
const numbers = document.querySelectorAll('.content');
const signs = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const back  = document.getElementById('back');
const decimal = document.getElementById('decimal');

//Functions for addition, subtraction, divison, and multiplication
function add (number1,number2){
    return number1 + number2;
}
function divide (number1, number2){
    if (number2===0) {
        alert("You can't divide by 0! Go back to fourth grade!");
    } else {
        return number1/number2;
    }
}
function multiply (number1, number2) {
    return number1 * number2;
}
function subtract (number1,number2) {
    return number1 - number2;
}
function operate (signValue, firstNum, secondNum) {
    if (signValue === "/") {
       return divide (firstNum, secondNum);
    } else if (signValue === "*") {
        return multiply (firstNum, secondNum);
    } else if (signValue === "+") {
       return add (firstNum, secondNum);
    } else if (signValue === "-") {
      return  subtract (firstNum, secondNum);
    }
}

function calculate () {
    const input = display.textContent;
    const part = input.split(signValue);
    //Make sure there's a valid operator
    if (clicked===1){
        //Needed so that the addition function doesn't join the two strings
        firstNum = parseInt(part[0]);  
        secondNum = parseInt (part[1]);
        answer = operate(signValue, firstNum, secondNum);
        if (isNaN(answer)){
            display.textContent='0';
        } else {
            displayed = Math.round(answer*1000)/1000;
            display.textContent = displayed;
        }

    } 
}

//Functions to display numbers and operators
numbers.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonValue = button.getAttribute('data-value'); 
      if (display.textContent === '0') {
        display.textContent = buttonValue;
      } else {
        display.textContent += buttonValue;
      }
    });
  });
  signs.forEach((sign) => {
    sign.addEventListener('click', () => {
        const input = display.textContent;
        const lastChar = input.slice(-1);

        // Check if the last character is not an operator before adding a new one
        if (['+', '-', '*', '/'].includes(lastChar)) {
            return;
        }
        if (clicked === 0) {
            signValue = sign.getAttribute('data-value');
            display.textContent += signValue;
            clicked = 1;
        } else if (clicked === 1) {
            calculate();
            signValue = sign.getAttribute('data-value');
            display.textContent += signValue;
            clicked = 1; 
        }
    });
});

clear.addEventListener('click', () => {
    display.textContent = '0';
    signValue;
    firstNum;
    secondNum;
    clicked = 0;
});

equal.addEventListener('click', () =>{
    calculate ();
    if (['+', '-', '*', '/'].some(sign => display.textContent.includes(sign)) && clicked === 0) {
        clicked = 1; 
        calculate();
        clicked=0;
    } 
    clicked = 0;
    console.log(clicked);
});

back.addEventListener('click', () => {
    displayed = display.textContent;
    let removedChar = displayed.slice(-1); 
    if (removedChar === '+' || removedChar === '-' || removedChar === '*' || removedChar === '/') {
        clicked = 0;
    }
    displayed = displayed.slice(0, -1);
    display.textContent = displayed;
});

decimal.addEventListener('click', () => {
    alert("This feature isn't supported");
})