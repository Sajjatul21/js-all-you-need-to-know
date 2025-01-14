/* 
    একটা function এর input হিসাবে যদি আরেকটা function output যায় তখন আমরা তাকে function composition বলব। 
    অর্থাৎ first function এর input হিসাবে যদি second function output যায় তখন আমরা তাকে function composition বলব।
*/

function print(inp) {
    console.log(inp);
}

function multiplyByFive(n) {
    return n * 5;
}

function add(a, b) {
    return a + b;
}

print(multiplyByFive(add(2,3)))
