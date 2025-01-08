var str = 'some string';
console.log(str.charAt(0));

var str2 = str.charAt(2);
console.log(str2);

var str3 = str.charAt(100);
console.log(str3);
console.log(typeof str3);


str = 'Some String';
var length = 0;

while (true) {
    if (str.charAt(length) == '') {
        break;
    }
    else {
        length++;
    }
}
console.log(length);

//easy way to find out string length
console.log('Sajjatul Islam'.length);