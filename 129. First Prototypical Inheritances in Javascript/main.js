
function Square(width) {
    this.width = width;
}
Square.prototype = {
    draw: function () {
        console.log("Drawing");
    },
    common: function () {
        console.log("I am common function");
    }
};
var sqr = new Square(45);


function Circle() {

}
Circle.prototype = {
    common: function () {
        console.log("I am common function");
    }
};