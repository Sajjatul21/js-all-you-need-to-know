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

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
    console.log("Drawing");
};



var sqr = new Square(45, "green");
console.log(sqr);

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

var c = new Circle(5, 'red');
console.log(c);
