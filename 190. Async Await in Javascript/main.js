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
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(res);
    // console.log(res.json());
    let data = await res.json();
    console.log(data);

}
fetchDate();