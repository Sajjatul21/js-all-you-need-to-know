/*  Logical Operator

1.&&
2.||
3. !

*/

var a = 10;
var b = 30;
var c= 20;

if(a > b && a>c){
    console.log(" a is greater than b and c")
}
else if(b>a && b> c){
    console.log("b is greater than a and c")
}
else{
    console.log('c i large')
}


var a = 50;
var b = 30;
var c= 20;

if(a > b || a>c){
    console.log("a is greater than b and c")
}
else if(b>a || b> c){
    console.log("b is greater than a and c")
}
else{
    console.log('c i large')
}

var check = !(a>b)
console.log(check)