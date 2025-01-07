var str = '10000'
var n = 10;
console.log(str * n) // In JavaScript, when you use the multiplication operator (*) between a string and a number, the string is automatically converted to a number before the multiplication operation.

console.log(str + n) // concat

// type conversion string to number 
console.log(Number(str)+n)
console.log(Number.parseInt(str)+ n)

console.log(n.toString())

console.log(String(Infinity))
console.log(Boolean(-Infinity))

// Falsy value

'' //empty string
0
null
undefined
NaN

console.log(Boolean(''))
console.log(Boolean('dsdasd'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(45))
console.log(Boolean(-45))


// boolean to string 
console.log(true)

var x = true
console.log(x.toString())