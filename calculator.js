//Create an addition function
//Create a subtraction function
//Create a multiplication function
//Create a division function

//create an event listener to help listen in on number keys

const addition = (...num) => {
    let total = 0;
    for (const arg of num) {
        total += arg;
    }
    return total;
}

const subtraction = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const multiplication = (...num) => {
    let total = 0;
    for (const arg of num) {
        total *= arg;
    }
    return total;
}

const division = (val1, val2) => {
    if(val1 > val2) {
        return(val1/val2);
    } else {
        return (val2/val1);
    }
}

const operate = (operator, num1, num2) => {
    let result = 0;
    switch(operator) {
        case "+":
            result = addition(num1, num2);
        case "-":
            result = subtraction(num1, num2);
        case "*":
            result = multiplication(num1, num2);
        case "/":
            result = division(num1, num2);
        default:
            console.log("error");
    }

    if(result === 0) {
        return 'Error';
    }
    return result;
}

const press = (digit) => {
    
    if(digit === '*' || digit === '/' || digit === '-' || digit === '+') {
        operatorVal = digit;
        if(val2 === 0) {
            val2 = parseInt(input.value);
        } else {
            val1 = operate(operatorVal, val1, digit);
        }
    } else {
        if(input.value === '0') {
            input.value = digit;
            val1 = parseInt(input.value);
        } else {
            input.value += digit;
            val1 = parseInt(input.value);
        } 
        console.log(digit);
    }
}

let val1 = 0;
let val2 = 0;
let allTotal = 0;
let operatorVal = '';
//adding all the event listeners
let button = document.querySelectorAll("#operand");
let operator = document.querySelectorAll("#operator");
let input = document.querySelector("input");
let equal = document.querySelector("#equal")
input.value = 0;

button.forEach(element => {
    element.addEventListener('click', () => {
        press(element.textContent)
    })
})

operator.forEach(element => {
    element.addEventListener('click', () => {
        press(element.textContent);
    })
})

equal.addEventListener('click', () => {
    operate(operatorVal, val1, val2);
})


/*button.addEventListener("click", () => {
   val = this.value;
   console.log(this);
    return 0;
})*/

//console.log(val);