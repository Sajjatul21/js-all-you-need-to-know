var i = 0;
while (i < 10) {
    console.log(i, 'Shihab');
    i++;
}

// when we know starting and ending point we use for loop 

var isRunning = true;
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log("winner winner chicken dinner");
        isRunning = false;
    }
    else {
        console.log('You have got ' + rand);
    }
}