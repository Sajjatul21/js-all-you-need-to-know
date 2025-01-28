function Person(name) {
    this.name = name;
}

Person.prototype.PI = 3.1416; // set pi on constructor prototype. prototype is an object

var p1 = new Person("Sajjatul Islam");
var p2 = new Person("Shihab");

console.log(p1);
console.log(p2);

var arr = [];
// console.log(arr)
// console.log(arr.__proto__)
// console.log(Array.prototype)
Array.prototype.myMethod = function () {
    console.log("My name is Shihab");
};

console.log(arr);

var anotherArr = [];
console.log(anotherArr);