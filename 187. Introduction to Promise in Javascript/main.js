let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'one');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'tow');
});

p1.then(v => {
    console.log(v);
});

p2.then(v => {
    console.log(v);
}).catch(e => {
    console.log(e);
});