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



function base(b) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    };

}
var base10 = base(10);
console.log(base10(2));  //2^10=1,024


var base5 = base(5);
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));