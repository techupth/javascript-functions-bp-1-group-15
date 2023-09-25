// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {};

calculator.add = function (a, b) {
    return a + b;
};

calculator.subtract = function (a, b) {
    return a - b;
};

calculator.multiply = function (a, b) {
    return a * b;
};

calculator.divide = function (a, b) {
    return a / b;
};

const resultAdd = calculator.add(10 , 20);
console.log(resultAdd);

const resultDivide = calculator.divide(3000, 10);
console.log(resultDivide);