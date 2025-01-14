function a() {
    b();
    console.log("I am Function a");
}
function b() {
    d();
    console.log("I am Function b");
}
function c() {

    console.log("I am Function c");
}
function d() {
    c();
    console.log("I am Function d");
}

var x = 100;
a();
console.log("I am Global");

//execution context
// 1. creation phase
// 2. execution phase 

