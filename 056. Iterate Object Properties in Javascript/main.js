// in operator
var obj = {
    x: 10,
    y: 20,
    z: 30
};
console.log("x" in obj); // property name should be string
console.log("p" in obj);

var obj1 = {
    x: 10,
    y: 20,
    z: 30
};

for (var i in obj) {
    // console.log(i); //for in loop work on property
    // console.log(obj[i]) // we use array notation to access obj1 property because property under variable and property are dynamic
    console.log(i + ": " + obj[i]);
}