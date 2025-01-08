// Nested Loop

//1
//1 2
//1 2 3
//1 2 3 4 
//1 2 3 4 5


var n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        console.log(j);
    }
}