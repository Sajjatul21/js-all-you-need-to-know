//what is Pure function
// it given the same result if given the same arguments
// It does not cause any observable side effect

function sqr(n) {
    return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));