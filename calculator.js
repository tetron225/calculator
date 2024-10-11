//Create an addition function
//Create a subtraction function
//Create a multiplication function
//Create a division function

//create an event listener to help listen in on number keys

const addition = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const multiplication = (num1, num2) => {
    return num1 * num2;
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
    console.log(operator === '+');
    switch(operator) {
        case '+':
            result = addition(num1, num2);
            break;
        case '-':
            result = subtraction(num1, num2);
            break;
        case '*':
            result = multiplication(num1, num2);
            break;
        case '/':
            result = division(num1, num2);
            break;
        default:
            console.log("error");
    }

    if(result === 0) {
        return 'Error';
    }
    return result;
}

const press = (digit) => {
    console.log(input.value);
    if(digit === '*' || digit === '/' || digit === '-' || digit === '+') {
        if(val2 !== 0) {
            val1 = operate(operatorVal, val1, val2);
            val2 = 0;
        }
        operatorVal = digit;
        isInput = true;
    } else {
        if(val1 === 0) {
            if(input.value === '0') {
                input.value = digit;
                val1 = parseInt(input.value);
            } else {
                input.value += digit;
                val1 = parseInt(input.value);
            } 
        } else {
            console.log('hit')
            console.log(val1)
            console.log(input.value);
            if(isInput) {
                input.value = digit;
                val2 = parseInt(input.value);
                isInput = false;
            } else {
                input.value += digit;
                val2 = parseInt(input.value);
            }
        }

    }
}

let val1 = 0;
let val2 = 0;
let allTotal = 0;
let operatorVal = '';
let isInput = false;
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
    allTotal = operate(operatorVal, val1, val2);
    input.value = allTotal;
})


/*button.addEventListener("click", () => {
   val = this.value;
   console.log(this);
    return 0;
})*/

//console.log(val);