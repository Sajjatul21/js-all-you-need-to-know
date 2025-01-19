// this
// ১.this যেই object এর মধ্যে ব্যবহার করা হবে সেই objet কে refer করবে।
// ২. object ব্যতিত this window object refer করবে।
// ৩. this এর মান execution context এর execution phase এর পেয়ে থাকে


function myFunc() {
    console.log(this);
}
myFunc();
new myFunc();

// 
var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties(); // when you use a method or property on object using this
        console.log(this); //object ব্যতিত this window object refer করবে।

    },
    printProperties: function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    }
};


rect.draw();

