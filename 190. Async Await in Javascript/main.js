/* function myPromise() {
    return Promise.resolve('Test Value');
}
console.log(myPromise()); */

/* 
async function test() {
    return 'test';
}
// console.log(test());
test().then(v => console.log(v)); */

/* let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Test value');
});
async function myAsyncFunc() {
    // p1.then(v=>console.log(v))
    let v = await p1;
    console.log("test");
    console.log(v);
}
myAsyncFunc(); */


async function fetchDate() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        let names = data.map(u => u.name);
        console.log(names);
    }
    catch (e) {
        console.log(e.message);
    }
}
fetchDate();