function Person(name) {
    this.name = name;
}

Person.prototype.PI = 3.1416; // set pi on constructor prototype. prototype is an object

var p1 = new Person("Sajjatul Islam");
var p2 = new Person("Shihab");

console.log(p1);
console.log(p2);



