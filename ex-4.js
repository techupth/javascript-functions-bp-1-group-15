// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {};

calculator.add = (a,b) => {
    return a+b;
};
calculator.subtract = (a,b) =>{
    return a-b;
};
calculator.multiply = (a,b) =>{
    return a*b;
};
calculator.divide = (a,b) =>{
    return a/b;
};
let resultAdd = calculator.add(10,20);
console.log(resultAdd);
let resultDivide = calculator.divide(3000,10);
console.log(resultDivide);

