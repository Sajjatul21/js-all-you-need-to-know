function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}
function Shape(color) {
    this.color = color;

}
Shape.prototype.common = function () {
    console.log("I am common function");
};

function Square(width, color) {
    Shape.call(this, color);
    this.width = width;
}

extend(Square, Shape);
Square.prototype.draw = function () {
    console.log("Drawing");
};



var sqr = new Square(45, "green");
// console.log(sqr);

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);
var c = new Circle(5, 'red');
// console.log(c.common());
Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    console.log("I am Calling from Circle and I have Overriding");
};
console.log(c.common())

console.log(sqr.common());