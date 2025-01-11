// First look at Closure

//If data comes from an external scope inside a scope, we call it a closure.

var b = 10;

function a() {
    console.log(b);
}

a();


// another example  /যদি কোন স্কোপ এর ভিতরে বাহিরের কোন স্কোপ থেকে কোন ডাটা আসে তাহলে তাকে আমরা ক্লোজার বলে।
function outer() {
    let outerVariable = 'I am from outer function';

    function inner() {
        console.log(outerVariable);  // inner() has access to outerVariable
    }

    return inner;
}

const closureExample = outer(); // outer() returns inner() function
closureExample(); // Logs: "I am from outer function"


// run this code on chrome consol 

function closure() {
    var x = 5;

    return function () {
        console.log(x);
    };
}

var abc = closure();
console.dir(abc);
// abc()