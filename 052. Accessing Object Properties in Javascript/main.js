var obj = {
    x: 10,
    y: 20
};

// access object property using dot notation
console.log(obj.x);
console.log(obj.y);


// access object property using bracket notation

console.log(obj["x"]); // when we access a property  using  array notation it must be wrap quotation. 

// "Array notation is necessary for dynamic property names and property names containing special characters."

/* 
    প্রোপার্টির নাম একটি ভেরিয়েবলে থাকে: কখনও কখনও আপনি কোড লেখার সময় সঠিক প্রোপার্টির নাম জানেন না,
    তাই আপনি এটি একটি ভেরিয়েবলে সংরক্ষণ করেন এবং তারপর সেই ভেরিয়েবলের মাধ্যমে মানটি পান। তখন আপনি array notation ব্যবহার করবেন। আবার
    যদি আমরা না যানি, আমাদের কোন প্রোপাটি টা access করতে হবে তখন আমরা array notation ব্যবহার করব।
*/

var person = {
    name: "johan",
    age: 32
};
// console.log(person['name'])
var props = "name";
console.log(person[props]);

/*প্রোপার্টির নামের মধ্যে স্পেস বা বিশেষ ক্যারেক্টার থাকে: যদি প্রোপার্টির নাম একটি সাধারণ শব্দ না হয় 
(যেমন first name), ডট নোটেশন কাজ করবে না, এবং আপনাকে ব্র্যাকেট নোটেশন ব্যবহার করতে হবে।
*/

var person1 = {
    "fast Name": "jack johan ",
    age: 32
};

console.log(person1["fast Name"]);

// array notation এর ক্ষেত্রে  আমাদের property গুলাকে string আকারে দিতে হবে । ্বা আমরা যদি ভেরিয়েবলের মাধ্যমে ও অ্যাক্সেক করতে চাই তাহলে সেটার ক্ষেত্রেও ভেরিয়েবলের মান টা স্ট্রিং হতে হবে।

var point = {
    a: 100,
    b: 200
};
console.log(point['a']);

var show = 'b';
console.log(point[show])

/* আমরা যখন যানবো না কোন ডাটাটা নিয়ে কাজ করতে হবে বা কোন প্রোপারটি টা নিয়ে এক্সপ্লোর  করতে হবে বা কোন প্রোপারটি টা কনসোল 
করবে হবে বা রেন্ডার করতে হবে সেটা যখন জানবো না সেটা যখন ভেরিয়েবলের মাধ্যমে আসবে বা সেটা ডাইনামিক হবে তখন আমরা array notation
 ব্যবহার করব। */