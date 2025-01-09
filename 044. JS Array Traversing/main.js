var arr = [1, 4, 3, 9, 8, 5, 7];

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    arr[i] = arr[i] + 2;
    console.log(arr[i]);
}

var arr1 = [5, 4, 3, 10, 8, 2, 7];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i]
}
console.log(sum);