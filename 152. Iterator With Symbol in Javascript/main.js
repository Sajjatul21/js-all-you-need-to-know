/* 
var arr = [1, 2, 3];

function createIterator(collection) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            };
        }
    };
}
let iterate = createIterator(arr);
console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next()); */

var arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);
console.log("Text"[Symbol.iterator]);