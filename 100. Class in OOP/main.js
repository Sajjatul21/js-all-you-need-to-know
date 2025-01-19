
var rect = {
    width: 10,
    height: 20,
    calculateArea: function () {
        return this.width * this.height;
    },
    calculateRange: function () {
        return 2 * (this.width + this.height);
    }

};

var area = rect.calculateArea();
var range = rect.calculateRange();


// class is just a Factory to create multiple object without code duplicate
// class is just a template of an  object 

class ClassName {
    // Constructor: Initializes object properties
    constructor(property1, property2) {
        this.property1 = property1; // Assign property1 to the object
        this.property2 = property2; // Assign property2 to the object
    }

    // Method: A function inside a class
    method1() {
        console.log(`Property1: ${this.property1}`);
    }

    method2() {
        console.log(`Property2: ${this.property2}`);
    }

    // Static Method: Can be called without creating an instance
    static staticMethod() {
        console.log("This is a static method.");
    }
}

// Creating an object (instance) of the class
const obj = new ClassName("Value1", "Value2");

// Accessing methods and properties
obj.method1(); // Output: Property1: Value1
obj.method2(); // Output: Property2: Value2

// Calling a static method
ClassName.staticMethod(); // Output: This is a static method.



class Rect {
    // constructor হলো সেই যায়গা যেখানে আমরা  property গুলো define করি।
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
    calculateRange() {
        return 2 * (this.width + this.height);
    }

}

var rect1 = new Rect(10, 20);
var rect2 = new Rect(30, 40);
var rect3 = new Rect(50, 60);