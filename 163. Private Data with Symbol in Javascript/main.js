const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol()
class Circle {
    constructor(radius, name) {
        this[_radius] = radius; // funny way to privet value
        this[_name] = name;

    }
    [_draw]() {
        console.log('Drawing...');
    }
}
let c1 = new Circle(2, "Cred");
console.log(c1);

console.log(Object.getOwnPropertyNames(c1));
console.log(Object.getOwnPropertySymbols(c1));

let key = Object.getOwnPropertySymbols(c1)[0];
console.log(c1[key]);

let key2 = Object.getOwnPropertySymbols(c1)[1];
console.log(key2);
console.log(c1[key2]);