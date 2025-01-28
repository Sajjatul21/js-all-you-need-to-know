function Shape() {

}
Shape.prototype = {
    common: function () {
        console.log("I am common function");
    }
};

function Square(width) {
    this.width = width;
}
// Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function () {
    console.log("Drawing");
};

var sqr = new Square(45);
var shape = new Shape();
console.log(sqr);
console.log(shape);

/* 
 sqr-Square-Object
 shape-Shape-Object
 we need 
 sqr-Square-Shape-Object 
*/

/*
Object.create() মেথডটি একটি নতুন অবজেক্ট তৈরি করতে ব্যবহৃত হয়, 
যা একটি বিদ্যমান অবজেক্টকে প্রোটোটাইপ হিসেবে সেট করে। 
এটি প্রোটোটাইপ-ভিত্তিক ইনহেরিটেন্স সহজ করে।

কিভাবে কাজ করে:
আপনি Object.create()-এর মধ্যে একটি অবজেক্ট পাস করেন।
নতুন অবজেক্টটি সেই পাস করা অবজেক্টকে প্রোটোটাইপ হিসেবে গ্রহণ করে।
নতুন অবজেক্টটি তার প্রোটোটাইপ চেইন থেকে প্রোপার্টি এবং মেথড অ্যাক্সেস করতে পারে।
*/