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

Square.prototype.common = function () {
    console.log("I am Calling from Squre and I have Overriding");
};


function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);


Circle.prototype.common = function () {
    Shape.prototype.common.call(this);
    console.log("I am Calling from Circle and I have Overriding");
};


var s = new Shape("black");
var sqr = new Square(45, "green");
var c = new Circle(5, 'red');

console.log(s.common());
console.log(sqr.common());
console.log(c.common());

var shapes = [s, sqr, c];
for(var i of shapes){
    i.common()
}