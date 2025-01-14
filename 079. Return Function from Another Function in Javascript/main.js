function greet(msg) {
    function greeting(name) {
        return msg + ' ' + name + "!";
    }
    return greeting;
}

var gm = greet("Good Morning");
// console.log(gm)
var msg = gm("Sajjatul Isla");
console.log(msg);


var hello = greet("Hello");
console.log(hello('Shihab'));
