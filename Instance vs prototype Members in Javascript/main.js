/* js has 2 part 
1. instance member
2. prototype members
instance member can access prototype member and prototype member can access instance member */
function Square(width) {
    this.width = width;

};

Square.prototype = {
    draw: function () {
        console.log("Draw");
    },
    // method overwrite 
    toString: function () {
        return 'My width is ' + this.width;
    }
};
var sqr1 = new Square(5);
sqr1.draw();
var sqr2 = new Square(10);
sqr2.draw();

console.log(sqr1.toString())
console.log(sqr2.toString())