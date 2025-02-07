/* const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000));

delay(2).then(()=>console.log('2 Second Delay'));
delay(1).then(()=>console.log('1 Second Delay'));
delay(3).then(()=>console.log('3 Second Delay'));
delay(2).then(()=>console.log('2 Second Delay'));
delay(5).then(()=>console.log('5 Second Delay')); */


let p1 = Promise.resolve("test");  // instead create a promise and resolved the value 
// console.log(p1)
p1.then(v => console.log(v));

let p2 = Promise.reject('reject');  ///instead create a promise . reject the valuer
p2.catch(e => console.log(e));