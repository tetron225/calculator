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