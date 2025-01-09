var obj1 = {
    a: 10,
    b: 20
};
var obj2 = {
    a: 10,
    b: 20
};
console.log(obj1 === obj2); //output false because object compare memory location.its memory location different that why output false

// if we compare object then we should compair between object property  
if (obj1.a === obj2 && obj1.b === obj2.b) {
    console.log(true);
}
else {
    console.log(false);
}

// we compare object converting string 
console.log(obj1);
console.log(JSON.stringify(obj1));

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));