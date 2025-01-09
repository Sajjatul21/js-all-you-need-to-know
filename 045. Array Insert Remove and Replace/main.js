var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr[2] = 44;
// console.log(arr);

arr.push(9);
console.log(arr);

arr.unshift(20);
console.log(arr);

/*
            splice structure
    array.splice(startIndex, deleteCount, addItem1, addItem2, ...)

 */

arr.splice(2, 0, 1000);
console.log(arr);

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

/* arr[2] = undefined;
console.log(arr) */

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.splice(2, 1);
console.log(arr1);

arr1.splice(3, 1, 33, 44);
console.log(arr1);
