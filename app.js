const screen = document.querySelector(".screen");
const numberBtns = document.querySelectorAll(".num");
const inputScreen = document.querySelector(".input");
const outputScreen = document.querySelector(".output")
const operatorBtns = document.querySelectorAll(".op");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");

let currentVal = "";
let operator = "";
let prevVal = "";
let shouldResetScreen = false;
let result;









// numberBtns.forEach((button) => button.addEventListener("click", populateDisplay));
numberBtns.forEach((button) => button.addEventListener("click", () => {
    populateScreen(button.innerText);
    
    inputScreen.textContent = currentVal;
    outputScreen.textContent = '';
}));

operatorBtns.forEach((button) => button.addEventListener("click", () =>{
    
    assignOperator(button.innerText);
    
    [currentVal, prevVal] = [prevVal, currentVal]; //swaps the current value to the prevVal variable and the prevVall into the currVal
    console.log("this is the value before op clicked" + prevVal);
    console.log("thisi is the val after " + currentVal);
    
}))

clearBtn.addEventListener("click", () => {
    inputScreen.textContent = "";
    outputScreen.textContent = "0"
    currentVal = "";
    prevVal = "";
})

equalBtn.addEventListener("click", () => {
    operate(parseInt(currentVal), parseInt(prevVal), operator);
    currentVal = "";
    prevVal = ""
})

function assignOperator(opBtn) {
    operator = opBtn
    console.log(opBtn);
}
// function populateDisplay() {
//     let buttonText = this.innerText;
    
    
//     if(buttonText === "clear") {
//         inputScreen.innerText = ""
//         outputScreen.innerText = "0";
//         return;
//     }else if(buttonText === "=") {
//         outputScreen.innerText = eval("2 +2")
//     } else{
//         inputScreen.innerText += buttonText;
        
//         return;
    
//     }

    
// }

function populateScreen(num) {
    if(currentVal.length <6) {
        currentVal += num
    }
    
    
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    if(num1 < num2) return num2 - num1
    else return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2){
    if(num1 < num2) {
        return num2 / num1
    } else {
        return num1 / num2;
    }
    
}

function operate(num1, num2, operator) {
    
    if(operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if(operator === "*") {
        result = multiply(num1, num2)
    } else if(operator === "/") {
        result = divide(num1, num2)
    }
    outputScreen.innerText = result;
}

