
//Synchronous: একটার পর একটা কাজ সিরিয়ালি (ক্রমানুসারে) সম্পন্ন হবে।
/* 
    console.log("Step 1: Start")
    console.log("Step 2: Processing...")
    console.log("Step 3: End") 
*/

// Asynchronous: কোনো কাজ চলতে চলতে অন্য কাজও শুরু হতে পারে।
console.log("Step 1: Start");
setTimeout(() => {
    console.log("Step 2: Processing...");
}, 2000);
console.log("Step 3: End");


console.log("I am Line one");
setTimeout(() => {
    console.log("I am Line two");
}, 3000);

setTimeout(() => {
    console.log("I am Line three");
}, 0);

console.log("I am Line four");

setTimeout(() => {
    console.log("I am Line five");
}, 1000);