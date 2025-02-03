/* 
    *What is this?
        Ans: In JavaScript, the this keyword refers to an object.

    The this keyword refers to different objects depending on how it is used:
        1) In an object method, this refers to the object.
        2) Alone, this refers to the global object.
        3) In a function, this refers to the global object.
        4) In a function, in strict mode, this is undefined.
        5) In an event, this refers to the element that received the event.
        6) Methods like call(), apply(), and bind() can refer this to any object.
*/

/* implicit Function Binding  */

//1) In an object method, this refers to the object.
let obj = {
    x: function () {
        console.log(this);
    }
};
obj.x();

// 2) Alone, this refers to the global object.
let x = this;
console.log(x);

// 3) In a function, this refers to the global object.

function mySelf() {
    console.log(this);
}
mySelf();

// another example
let obj2 = {
    x: function () {
        function y() {
            console.log(this);
        }
        y();
    }
};
obj2.x();

/* 
4) In a function, in strict mode, this is undefined.

"use strict";
function myFunction() {
    return this;
}

console.log("use strict",myFunction()); */


/* Explicit Function Binding */

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "John",
    lastName: "Doe",
};

console.log(person1.fullName());
// Return "John Doe":
console.log(person1.fullName.call(person2));

//bind
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName());
// https://www.youtube.com/watch?v=iMbMR86liyE&t=48s