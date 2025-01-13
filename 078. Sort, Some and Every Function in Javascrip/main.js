// sort change main array 

var persons = [
    {
        name: "A",
        age: 24
    },
    {
        name: "B",
        age: 19
    },
    {
        name: "C",
        age: 25
    },
    {
        name: "D",
        age: 21
    }
];

var arr = [5, 4, 3, 8, 1, 7, 0, 6, 5, 7, 2, -1, -4, -8];
arr.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(arr);