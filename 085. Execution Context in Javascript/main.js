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


//execution of c function context
//execution of d function context
//execution of b function context
//execution of a function context
//execution of global context

// execution context work like LIPO

//execution of c function context -> execution first
//execution of d function context -> execution second
//execution of b function context -> execution third
//execution of a function context -> execution forth
//execution of global context -> execution last




/* "Context" শব্দের বাংলা অর্থ হলো "প্রসঙ্গ" বা "প্রেক্ষাপট"। এটি এমন পরিস্থিতি বা অবস্থা নির্দেশ করে, যার মধ্যে কোনো ঘটনা ঘটে */


/* In JavaScript, the execution context refers to the environment in which code is executed. Each execution context operates in two distinct phases:
1.Creation Phase:
2.Execution Phase: */

//learn execution context 
// https://academy.vivasoftltd.com/javascript-bootcamp/fundamentals/execution-context/