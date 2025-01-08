var n = 10;
var str = '';

if (n % 2 == 0) {
    str = "Even";
}
else {
    str = "Odd";
}
console.log(str);


// Ternary Operator
//condition ? true side : false side

var result = n % 2 == 0 ? "Even" : "Odd";
console.log(result);

// when  need one line condition we use ternary operator for multiline condition we use if else 