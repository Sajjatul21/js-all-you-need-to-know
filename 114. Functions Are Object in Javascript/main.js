/*
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    this.draw = function () {
        console.log('I am a rectangle');
        this.printProperties();
        console.log(this);

    };
    this.printProperties = function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    };
}; */

// In javaScript function is a object. it has constructor property is also have object like property
function test() {
    console.log("Something");
}
console.log(test.name, test.length);



var Rect = new Function('width', 'height', `
    this.width = width;
    this.height = height;

    this.draw = function () {
        console.log('I am a rectangle');
        this.printProperties();
        console.log(this);

    };
    this.printProperties = function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    };
    `);

var rect = new Rect(4, 5);
console.log(rect);
rect.draw();

//https://www.notion.so/114-Functions-Are-Object-in-Javascript-1839ad76272380e2b7c0deb9e777e6c1