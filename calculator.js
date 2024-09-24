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

const multiplication = )(...num) {
    let total = 0;
    for(const arg of num) {
        total *= arg;
    }
    return total;
}

const division = (dividend, divisor) => {
    return (dividend/divisor);
}