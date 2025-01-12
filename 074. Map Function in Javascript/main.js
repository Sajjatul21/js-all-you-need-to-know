/* 
    Why Use map() in JavaScript?
   
    The map() method in JavaScript is used to transform each element of an array and create a 
    new array with the transformed values. It is ideal when you need to process data and return 
    a modified version of the original array.

    ** map() give us modified new array to existing array.
    ** forEach modified main array and map make a new array and  return the array

*/

/* 
    const newArray = array.map(function(element, index, array) {
    // Return the transformed value for each element
});

*/

var arr = [1, 2, 3, 4];
var sqrArr = arr.map(function (value, index, arr) {
    // return Math.random* 100;
    return value * value;

});
console.log(arr);
console.log(sqrArr);

function map(arr, callback) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        var temp = callback(arr[i], i, arr);
        newArray.push(temp);
    }
    return newArray;
}

var myMap = map(arr, function (value, index, arr) {
    return value * value;
});
console.log(myMap);


var qubArr = map(arr, function (value) {
    return value * value * value;
});

console.log(qubArr);


var arrTen = map(arr, function (value) {
    return value * 10;
});

console.log(arrTen);