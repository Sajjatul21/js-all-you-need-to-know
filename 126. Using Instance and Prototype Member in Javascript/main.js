function Square(width) {
    //instance member
    this.width = width;
    this.getWidth = function () {
        console.log('Width is ' + this.width);
        
    };

};

Square.prototype = {
    draw: function () {
        this.getWidth()
        console.log("Draw");
    },
    // method overwrite 
    toString: function () {
        return 'My width is ' + this.width;
    }
};
var sqr1 = new Square(5);
console.log(sqr1.draw())