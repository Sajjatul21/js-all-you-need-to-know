// Higher Order function 

// we can pass function an argument
// we can function from another function

function add(a, b) {
    return a + b;
}

function manipulate(a, b, func) {
    var c = a + b;
    var d = a - b;

    /* function multiply() {
        var m = func(a, b);
        return c * d * m;
    }
    return multiply; */

    return function () {
        var m = func(a, b);
        return c * d * m;
    };
}

var multiply = manipulate(4, 3, add);
// console.log(typeof multiply);
console.log(multiply());