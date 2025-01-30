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


// for of loop give us direct value, not index
var arr = [1, 2, 3];
for (let i of arr) {
    console.log(i);
}

for (let i of "Shihab") {
    console.log(i);
}

/* 
// for of not working of object because object don`t have [Symbol.iterator]
let obj = {
    a: 10,
    b: 20
};
for(let i of obj){
    console.log(i)
}
*/
