class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('Drawing...');
    }
}
let c1 = new Circle(2);
c1.draw();