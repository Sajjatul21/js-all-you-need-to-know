
// create a simple function 

function sample(a, b) {
    var c = a + b;
    var d = a - b;

    var result = sum(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}
var result =sample(8, 5);
console.log(result)