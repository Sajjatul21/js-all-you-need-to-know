var point = {
    x: 10,
    y: 20
};

// set value using dot notation
point.x = 43;
point.a = 100;
console.log(point);
console.log(point.d); // show undefine because d is not define point opject.


//Use array notation when you want to set properties based on different logic or based on user input.

point["y"] = 500;
var prop = 'z'
point[prop] = 900;

console.log(point)