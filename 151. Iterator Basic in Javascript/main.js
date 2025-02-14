// iterator object-> array, string, map

var arr = [1, 2, 3];
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

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
console.log(iterate.next());