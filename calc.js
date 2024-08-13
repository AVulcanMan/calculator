function add (number1,number2){
    return number1 + number2;
}
function divide (number1, number2){
    if (number2===0) {
        alert("You can't divide by 0! Go back to fourth grade!")
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
let firstNum =30;
let sign;
let secondNum;
function operate (sign, firstNum, secondNum) {
    if (sign === "division") {
       return divide (firstNum, secondNum);
    } else if (sign === "multiplication") {
        return multiply (firstNum, secondNum);
    } else if (sign === "addition") {
       return add (firstNum, secondNum);
    } else if (sign === "subtraction") {
      return  subtract (firstNum, secondNum);
    }
}
const display = document.getElementById ('display');
const buttons = document.querySelectorAll('.content');
const clear   = document.getElementById('clear');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-value');
        // Get the value from the button's data attribute
        // Update the display with the button's value
        if (display.textContent === '0') {
            display.textContent = buttonValue;
        } else {
            display.textContent += buttonValue;
        }
    });
});
clear.addEventListener('click', () => {
    display.textContent = '0';
    firstNum;
    secondNum;
    sign;
})
