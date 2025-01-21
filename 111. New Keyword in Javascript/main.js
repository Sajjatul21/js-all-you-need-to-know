
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
};
/* var rect = new Rectangle(10, 20);
rect.draw(); */


// new implementation 
function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

var rect4 = myNew(Rectangle, 45, 30);
rect4.draw();

// https://www.notion.so/111-New-Keyword-in-Javascript-c052baf7944646fbbc38a5f7d7064084