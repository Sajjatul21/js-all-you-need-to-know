/* 
    Composition হলো এমন একটি পদ্ধতি যেখানে বিভিন্ন অবজেক্টের 
    ফাংশনালিটি বা বৈশিষ্ট্যগুলো একত্রিত করে নতুন অবজেক্ট তৈরি করা হয়।
*/
var canWalk = {
    walk: function () {
        console.log("walking...");
    }
};

var canEat = {
    eat: function () {
        console.log("Eating...");
    }
};

var person = Object.assign({}, canWalk, canEat);
person.name = "Sajjatul Islam";
console.log(person);
console.log(person.eat());