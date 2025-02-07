let arr = [1, 2, 3, 4, 5];

let sqrArr = arr.map(v => v * v);
console.log(sqrArr);

function asyncMap(arr, callback){
    return arr.map(v=>{
        setTimeout(callback(v),0)
    })
}

let qbArr = asyncMap(arr, v=> v*v*v)
console.log(qbArr)