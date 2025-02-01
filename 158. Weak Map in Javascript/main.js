let a = { a: 10 }, b = { b: 20 };
let weakMap = new WeakMap([[a, 45], [b, 75]]);
a = null;
console.log(weakMap.get(a));
console.log(weakMap.has(a));
console.log(weakMap.has(b));
console.log(weakMap);

