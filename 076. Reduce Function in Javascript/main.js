// In JavaScript, the reduce() method is a powerful tool for transforming an array into a single value by applying a function to each element in the array. This method is particularly useful when you need to perform operations like summing numbers, concatenating strings, or accumulating values based on certain conditions.

/* 
    array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

    accumulator: The accumulated value returned by the last execution of the callback, 
    initialValue if provided.
    currentValue: The current element being processed in the array.
*/

// কাজ হচ্ছে একটা ইটারেবল object বা অ্যারে এর দুইটা value  কে process করে একটা value দওয়া
var arr = [2, 4, 3, 7, 5, 8, 9, 6];

var sum = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(sum);

var max = arr.reduce(function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue);
}, 0);
console.log(max);



function reduce(arr, callback, acc) {

    for (var i = 0; i < arr.length; i++) {

        acc = callback(acc, arr[i]);
    }
    return acc;
}

var sum1 = reduce(arr, function (previousValue, currentValue) {
    return previousValue + currentValue;
}, 0);

var max = reduce(arr, function (pre, curr) {
    return Math.max(pre, curr);
}, arr[0]);

var min = reduce(arr, function (pre, curr) {
    return Math.min(pre, curr);
}, arr[0]);

console.log(sum1);
console.log(max);
console.log(min);