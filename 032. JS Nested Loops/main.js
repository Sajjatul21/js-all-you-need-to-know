// Nested Loop

//1
//1 2
//1 2 3
//1 2 3 4 
//1 2 3 4 5


var n = 5;
for (var i = 1; i <= n; i++) {
    var result = '';
    for (var j = 1; j <= i; j++) {
        result = result + j + ' ';
    }
    console.log(result);
}


// another challenge

//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

var n = 5;
for (var i = 1; i<=n; i++){k
    var result = ''
    for(var j = 1;j<=n;j++){
        // console.log(j)
        result += "* "
    }
    console.log(result)
}