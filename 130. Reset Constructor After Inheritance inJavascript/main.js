function Shape() {

}
Shape.prototype.common = function () {
    console.log("I am common function");
};

function Square(width) {
    this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
    console.log("Drawing");
};



var sqr = new Square(45);
var shape = new Shape();
console.log(sqr);
console.log(shape);

