function Square(width) {
    this.width = width;
  
};

Square.prototype = {  // prototype is an object
    draw: function () {
        console.log("Draw");
    }
};
var sqr1 = new Square(5);
sqr1.draw()
var sqr2 = new Square(10);
sqr2.draw()
