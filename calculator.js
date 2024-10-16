//Create an addition function
//Create a subtraction function
//Create a multiplication function
//Create a division function

//create an event listener to help listen in on number keys
//------------------------Math Functions------------------------------------------------------
const addition = (num1, num2) => {return num1 + num2;}
const subtraction = (num1, num2) => {return num1 - num2;}
const multiplication = (num1, num2) => {return num1 * num2;}
const division = (val1, val2) => {
    if(val2 === 0) {
        return input.value = 'THIS VALUE DOES NOT EXIST';
    }
    return val1 / val2;
}
//--------------------------------------------------------------------------------------------
const operate = (operator, num1, num2) => {
    let result = 0;
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
        } else {
            operatorVal = digit;
            isInput = true;
            val1 = parseFloat(input.value);
        }
    } else {
        if(operatorVal === '') {
            if(input.value === '0') {
                input.value = digit;
                console.log(input.value);
                val1 = parseFloat(input.value);
                
            } else {
                input.value += digit;
                console.log(input.value);
                val1 = parseFloat(input.value);
            } 
        } else {
            if(isInput) {
                input.value = digit;
                val2 = parseFloat(input.value);
                isInput = false;
            } else {
                input.value += digit;
                val2 = parseFloat(input.value);
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
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let percent = document.querySelector("#percent");
let sign = document.querySelector('#sign');
let decimal = document.querySelector('#decimal')

input.value = 0;

decimal.addEventListener('click', () => {
    input.value += '.'
})

button.forEach(element => {
    element.addEventListener('click', () => {
        press(element.textContent)
    });
});

operator.forEach(element => {
    element.addEventListener('click', () => {
        press(element.textContent);
    });
});

equal.addEventListener('click', () => {
    console.log(val1, val2)
    if (input.value !== 0 && val2 === 0) {
        val2 = parseFloat(input.value);
    }
    allTotal = operate(operatorVal, val1, val2);
    input.value = allTotal;
});

clear.addEventListener('click', () => {
    val1 = 0;
    val2 = 0;
    allTotal = 0;
    operatorVal = '';
    isInput = false;
    input.value = 0;
});

percent.addEventListener('click', () => {
    input.value = input.value / 100;
});

sign.addEventListener('click', () => {
    let temp = parseFloat(input.value) * -1;
    input.value = temp.toString();
})



/*button.addEventListener("click", () => {
   val = this.value;
   console.log(this);
    return 0;
})*/

//console.log(val);