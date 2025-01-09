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