var person = {
    name: 'Shihab'
};

console.log(person);

console.log(person.toString());

for (var i in person) {
    console.log(i);
}

console.log(Object.keys(person));

// property descriptor is an object 

/* var descriptor = Object.getOwnPropertyDescriptor(person,'name')
console.log(descriptor) */

/* var baseObj = Object.getPrototypeOf(person)
// console.log(baseObj)
var descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')
console.log(descriptor) */

Object.defineProperty(person, 'name', {
    configurable: false,
    enumerable: false,
    writable: false,
});

// configurable
console.log(delete person.name);

// enumerable
console.log(Object.keys(person));

// writeable
person.name = "sajjatul islam";
console.log(person)
console.log(person.name)