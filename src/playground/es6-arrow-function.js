// Function to square a number

// ES5
const square = function(x) {
    return x * x;
};

// ES6

// const squareArrow = (x) => {
//     return x * x;
// };

// ES6 Arrow Expression
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// Challenge

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Yves Mugenga"));