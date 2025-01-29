// function declaration
function add(a, b) {
        return a + b;
}

//function expression
let sum = function () {
        return a + b;
};

// arrow function

/* let sum2 = (a, b) => {
        return a + b;
};  */

let sum2 = (a, b) => a + b;
console.log(sum2(2, 3));

// let sqr => (x) = x * x;
let sqr = x => x * x;
console.log(sqr(2));