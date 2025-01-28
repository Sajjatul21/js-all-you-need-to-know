function Person(name) {
    this.name = name;
}

var p1 = new Person("Sajjatul Islam");
console.log(Object.getPrototypeOf(p1))
// console.log(p1.__proto__)  // deprecated


// the other way of get  object prototype using constructor  
console.log(Person.prototype)

console.log(Object.getPrototypeOf(p1)== Person.prototype)