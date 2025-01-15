
var a = 11;
function A() {
    var b = 12;
    function B() {
        var c = 23;
        console.log(c);
    }
    function C() {
        var d = 56;
        console.log(d);
    }
    console.log(b);
    D(b);
    B();
    C();
}

function D(n) {
    return n + a;
}

// A() function scope chain -> a,b,B(),C(),D()
// B() function scope chain -> a,b,c,B(),C(),D()
// C() function scope chain -> a,b,d,B(),C(),D()
// D() function scope chain -> a,n,A()
// 