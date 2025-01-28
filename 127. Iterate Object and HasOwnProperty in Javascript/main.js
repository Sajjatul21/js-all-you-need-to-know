function Square(width) {
    this.width = width;
    this.getWidth = function () {
        console.log('Width is ' + this.width);

    };

};

Square.prototype = {
    draw: function () {
        this.getWidth();
        console.log("Draw");
    },
    toString: function () {
        return 'My width is ' + this.width;
    }
};
var sqr1 = new Square(5);
var sqr2 = new Square(10);

console.log(sqr1.hasOwnProperty("width"));
console.log(sqr1.hasOwnProperty("getWidth"));
console.log(sqr1.hasOwnProperty("draw"));

console.log(Object.keys(sqr1));

/* when we get instance member and prototype members we use for in loop. for in loop give us 
instance member and prototype member */
for (var i in sqr1) {
    console.log(i);
}