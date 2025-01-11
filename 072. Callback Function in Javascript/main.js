
// create a simple function 

/* callback function টা এই রকম যে user আমাদের একটা function দিবে argument আকারে আমরা সেটা parameter আাকরে গ্রহন করে সেই function  টা কে আমরা আগেই কল করে রাখব। */


// In the callback function, we will assume that the user will give us a function, and we will call it beforehand.
// The user will give the function as an argument, we will accept it as a parameter and call it inside our function.

function sample(a, b, callback) {
    var c = a + b;
    var d = a - b;

    var result = callback(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}
var result = sample(8, 5, sum);
console.log(result);

var result2 = sample(8, 5, function (c, d) {
    /*     console.log(c, d);  //var c = a + b; var d = a - b;*/
    return c - d;
});
console.log(result2);

var result3 = sample(8, 9, function (c, d) {
    return c * d;
});
console.log(result3);

var result4 = sample(8, 3, function (c, d) {
    return c / d;
});
console.log(result4);