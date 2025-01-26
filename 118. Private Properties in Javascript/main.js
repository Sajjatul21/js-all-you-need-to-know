/* 
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    var printProperties = function () {
        console.log('my width is ' + this.width);
        console.log("my height is " + this.height);
    };
    this.draw = function () {
        console.log("I am rectangle");
        printProperties();
    };
};

var rect = new Rectangle(20, 10);
  

 */


var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    // var name = 'Sajjatul';

    var position = {
        x: 50,
        y: -100
    };

    var printProperties = function () {
        console.log('my width is ' + this.width);
        console.log("my height is " + this.height);
    }.bind(this);
    this.draw = function () {
        console.log("I am rectangle");
        printProperties();
        console.log("Position:X = " + " " + position.x + ", Position:Y = " + position.y);
    };
};

var rect = new Rectangle(20, 10);
// console.log(rect.name)
rect.draw();

