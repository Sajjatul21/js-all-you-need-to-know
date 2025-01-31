let a = { a: 10 }, b = { b: 20 };
let set = new Set([a, b]);
// console.log(set);
a = null;
console.log(set);
let  arr =[...set]
console.log(arr)