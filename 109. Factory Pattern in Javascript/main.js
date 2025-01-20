/* 
var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties();
        console.log(this);

    },
    printProperties: function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    }
};

rect.draw();
 */

var createReact = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a rectangle');
            this.printProperties();
            console.log(this);

        },
        printProperties: function () {
            console.log("My width is " + this.width);
            console.log("My height is " + this.height);

        }
    };

};

var rect = createReact(10, 5);
console.log(rect);// return an Object
rect.draw();

var rect2 = createReact(100, 200);
console.log(rect2);
rect2.draw();
