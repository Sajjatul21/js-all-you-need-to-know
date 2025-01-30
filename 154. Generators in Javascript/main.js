function* generator() {
    yield 1;
    yield 2;
    yield 3;

}
let iterate = generator();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());