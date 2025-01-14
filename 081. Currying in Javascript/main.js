function add(a, b, c) {
    return a + b + c;
}
console.log(add(2, 4, 6));

// curring

function curring(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

var result = curring(2)(4)(6);
console.log(result);