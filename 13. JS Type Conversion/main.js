var str = '10000'
var n = 10;
console.log(str * n) // In JavaScript, when you use the multiplication operator (*) between a string and a number, the string is automatically converted to a number before the multiplication operation.

console.log(str + n) // concat

// type conversion string to number 
console.log(Number(str)+n)
console.log(Number.parseInt(str)+ n)

console.log(n.toString())

console.log(String(Infinity))
console.log(Boolean(Infinity))