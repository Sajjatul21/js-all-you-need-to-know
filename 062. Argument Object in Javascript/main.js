function test() {
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
// test();
test(1, 3, 4);

function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}
addAll(1,2,3,4)
addAll(1,2,3,4,6,7,8,9,10)