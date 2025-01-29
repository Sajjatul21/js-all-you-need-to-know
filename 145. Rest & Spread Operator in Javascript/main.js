function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

// rest operator

function sum2(a, b, ...rest) {  // when 3 dot use on parameter its rest operator
    // console.log(rest)// rest operator give us array

    console.log(a, b);
    console.log(rest);
    return rest.reduce((a, b) => a + b);

}

console.log(sum2(1, 2, 3, 4, 5));

let arr = [1, 2, 3, 4, 5, 6];
console.log(...arr);

var obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
// var obj2 = obj
var obj2 = {
    ...obj
};
console.log(obj2);
obj2.a = 100;
console.log(obj);
console.log(obj2);