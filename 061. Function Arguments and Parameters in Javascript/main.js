/* function add (var a, var b ){ // parameter act like variable

} */

function add(a, b) {
    var result = a + b;
    console.log(result);
}
add(10, 20);

function sub(a, b) {
    var result = a - b;
    console.log(result);
}
sub(20, 5);

var arr1 = [23, 43, 64];
var arr2 = [65, 83, 94, 89];
var arr3 = [5, 85, 90, 100, 200];

/* 
var sum1 = 0; 
for(var i= 0; i<arr1.length; i++){
    sum1 += arr1[i]
}
console.log(sum1)


var sum2 = 0; 
for(var i= 0; i<arr2.length; i++){
    sum2 += arr2[i]
}
console.log(sum2)


var sum3 = 0; 
for(var i= 0; i<arr3.length; i++){
    sum3 += arr3[i]
}
console.log(sum3)

  */

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);
