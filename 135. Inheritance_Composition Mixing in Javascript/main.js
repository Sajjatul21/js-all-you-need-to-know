/* 
    Composition হলো এমন একটি পদ্ধতি যেখানে বিভিন্ন অবজেক্টের 
    ফাংশনালিটি বা বৈশিষ্ট্যগুলো একত্রিত করে নতুন অবজেক্ট তৈরি করা হয়।
*/
function mixing(target, ...sources) {
    // Object.assign(Person.prototype, canWalk, canEat);
    Object.assign(target, ...sources);
}
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

var canSwim = {
    swim: function () {
        console.log('Swimming..');
    }
};

/* var person = Object.assign({}, canWalk, canEat);
person.name = "Sajjatul Islam";
console.log(person);
console.log(person.eat()); */

function Person(name) {
    this.name = name;
}
mixing(Person.prototype, canWalk, canEat);
var person = new Person("Sajjatul Islam");
console.log(person);

function GoldFish(name) {
    this.name = name;
}

mixing(GoldFish.prototype, canEat, canSwim);
var fish = new GoldFish("Oranda");
console.log(fish);