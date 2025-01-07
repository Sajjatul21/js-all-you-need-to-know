/* var name = '';
// var name = 'Sajjatul';
var fullName = "";

if (name.length == 0) {
    fullName = "Shihab";
}
else {
    fullName = name;
}
console.log(fullName);
 */
// or shorthand
var name = '';
var fullName = name || "Shihab";
console.log(fullName);

var isOk = true
// var isOk = false

/* if(isOk){
    console.log("Everything is Ok")
} */

isOk&& console.log("Everything is Ok")