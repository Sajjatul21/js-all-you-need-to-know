let arr = [1, 2, 3, 4, 5];

let sqrArr = arr.map(v => v * v);
console.log(sqrArr);

function asyncMap(arr, callback) {
    return arr.map(v => {
        // setTimeout(callback.bind(null, v), 0);
        setTimeout(()=>callback( v), 0);
    });
}

let qbArr = asyncMap(arr, v => {
    console.log(v);
});
console.log(qbArr)