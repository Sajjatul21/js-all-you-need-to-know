function sayHi(n) {
    if (n == 0) {
        return;
    }
    console.log(n, 'Hi, I am Calling');
    sayHi(n - 1);
}
sayHi(10);


/* 
    if understand this program follow this link:
    https://www.notion.so/80-Recursive-Function-in-Javascript-5601422ec37b4dfb93f53b43f34805ab
*/
function sum(n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}
console.log(sum(5));