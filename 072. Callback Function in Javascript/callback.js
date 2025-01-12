/*           "I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/
// https://www.w3schools.com/js/js_callback.asp

// https://www.youtube.com/watch?v=0eSG3_mvFZY


function display(some) {
    console.log(some);
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

calculator(5, 5, display);
