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