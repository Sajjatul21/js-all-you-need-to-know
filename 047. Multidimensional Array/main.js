/*
    two dimensional array
var arr = [
    []
] */


/* three dimensional array;
var arr = [
    [
        []
    ]
]
 */

var arr = [
    [87, 56, 79, 100],
    [58, 78, 98, 90],
    [96, 79, 45, 99]
];
// console.log(arr);

/* console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
 */

/* console.log(arr[0][0]);
console.log(arr[1][2]);
console.log(arr[2][1]); */


for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (var j = 0; j < arr[i].length; j++) {
        console.log("Element " + i + ": " + arr[i][j]);
    }
}