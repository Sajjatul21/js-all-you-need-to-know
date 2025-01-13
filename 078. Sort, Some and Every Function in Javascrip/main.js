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

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    else if (a.age < b.age) {
        return -1;
    }
    else {
        return 0;
    }
});

console.log(persons);


/*  In JavaScript, the every() method is used to determine whether all elements in an array satisfy a
  specified condition implemented by a provided function. It returns true if the callback function returns
  a truthy value for every array element; otherwise, it returns false. */
var arr1 = [5, 4, 3, 8, 1, 7, 6, 5, 7, 2];

var res1 = arr1.every(function (value) {
    return value % 2 == 0;
});
console.log(res1);

var res2 = arr1.every(function (value) {
    return value >= 0;
});
console.log(res2);