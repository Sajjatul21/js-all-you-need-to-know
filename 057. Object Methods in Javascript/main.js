var obj = {
    x: 10,
    y: 20,
    z: 30
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/* var obj1 = {
    x: 10,
    y: 20,
    z: 30
};
var obj2 = obj1;
obj2.x = 100;
console.log(obj1);
console.log(obj2); */


var obj1 = {
    x: 10,
    y: 20,
    z: 30
};
var obj2 = Object.assign({}, obj1);
obj2.x = 100;
console.log(obj1);
console.log(obj2);