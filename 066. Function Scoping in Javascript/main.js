var a = 'abc';

function x() {
    // var a = 20;
    function y() {
        // var a = 10;
        console.log(a);
    }
    console.log(a);
    y();
}
x();