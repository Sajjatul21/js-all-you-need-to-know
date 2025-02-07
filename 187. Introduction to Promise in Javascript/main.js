let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'one');
});

let p2 = new Promise ((resolve, reject)=>{
    setTimeout(resolve, 3000, 'tow')
})
console.log(p1)
console.log(p2)