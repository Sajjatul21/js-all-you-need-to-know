/*Abstraction is a concept in programming where the complexity of a system is hidden, 
 and only the essential information is displayed. It is a method that simplifies the 
 presentation of core features or functionalities by concealing unnecessary details from the user.*/

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
// rect.printProperties() //error   

