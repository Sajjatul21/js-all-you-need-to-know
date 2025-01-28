function Square(width) {
    this.width = width;

};

Square.prototype = {  // prototype is an object
    draw: function () {
        console.log("Draw");
    }
};
var sqr1 = new Square(5);
var sqr2 = new Square(10);
console.log(sqr1); // instance/ object
console.log(sqr2);// instance/ object