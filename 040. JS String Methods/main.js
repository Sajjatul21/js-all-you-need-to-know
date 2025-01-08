var a = "I am";
var b = "Shihab";

var c = a.concat(' ' + b);
console.log(c);     //I am Shihab

// var d = c.substr(5);
// var d = c.substr(5,2);
var d = c.substr(5, 4);
console.log(d);

console.log(c.charAt(3));
console.log(c.startsWith("I am"));
console.log(c.endsWith("sj32"));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log('           Sajjatul islam       '.trim());

// split () give us array  break the string
console.log(c.split(' '));