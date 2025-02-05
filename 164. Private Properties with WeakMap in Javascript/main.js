const _radius = new WeakMap();
const _name = new WeakMap();
class Circle {
    constructor(radius, name) {
        _radius.set(this, radius);
        _name.set(this, name);

    }
    draw() {
        console.log('Drawing...');
        console.log(_radius.get(this), _name.get(this));
    }
}
let c1 = new Circle(2, "Cred");
console.log(c1);
c1.draw();