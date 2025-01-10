/*             Scope            */

var a = 'abc'; // global variable access any where

// In JavaScript, a block is created only when a function is created.

// Nothing but functions creates a block. So you can access the function from anywhere in the global variable.
if (true) {
    if (true) {
        var b = "I am B";
    }
}

console.log(b);