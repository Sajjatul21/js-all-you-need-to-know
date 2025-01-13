var arr = [1, 5, 7, 8, 9, 3, 10, 50];

var result = arr.find(function (value) {
    return value == 9;
    // return value == -9;
});
console.log(result);

function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}
var findValue = find(arr, function (value) {
    return value == 9;
});
console.log(findValue);