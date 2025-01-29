//convert object to array
var obj = {
    a: 10,
    b: 20
};
console.log(Object.entries(obj));

//convert arr to object
var objArr = [
    ["a", 10],
    ["b", 20]
];
console.log(Object.fromEntries(objArr));
