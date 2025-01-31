// When to Use forEach in JavaScript?
// The forEach method in JavaScript is used to iterate over the elements of an array. It is best suited for cases where you need to perform an operation on each element of the array without returning a new array.

/* 
    array.forEach(function(element, index, array) {
        // Code to execute on each element
});

*/

/* var arr = [1, 2, 3, 4, 5];
var sum = 0
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr);
    sum += value
});

console.log(sum) */

var arr = [1, 2, 3, 4, 5];
var sum = 0;
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        callback(arr[i], i, arr);
    }
}
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
    sum += value;
});
console.log(sum);

forEach(arr, function (value, index, arr) {
    arr[index] = value + 5;
});
console.log(arr);