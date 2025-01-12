
// The `filter()` method creates a new array based on various conditions from our existing array.
// Only those elements from the original array that meet the specified condition are included in the new array.
// It doesn't modify the original array but returns a new one with the filtered elements.

/* 
 Why 
   Use filter() in JavaScript?
The filter() method in JavaScript is used to create a new array containing elements from the original 
array that meet a specific condition. It is ideal when you want to extract a subset of data based on certain criteria.
*/

/* 
    Syntax of filter()

    const newArray = array.filter(function(element, index, array) {
    // Return true to include the element, false to exclude it
});

*/

var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];

var filterArr = arr.filter(function (value) {
    // return value % 2 == 0;
    // return value % 2 == 1;
    return value > 4;
});
console.log(filterArr);


function filter(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var odd = filter(arr);
console.log(odd);