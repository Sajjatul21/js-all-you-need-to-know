let a = { a: 10 }, b = { b: 20 };
/* let set = new Set([a, b]);
// console.log(set);
a = null;
console.log(set);
let arr = [...set];
console.log(arr[0]); */

// let wekSet = new WeakSet([1,2]) // don't allow to primitive data weakset only allow object

let weakSet = new WeakSet([a, b]);
console.log(weakSet);
a = null;
console.log(weakSet.has(a));
console.log(weakSet.has(b));