function sayName(name) {
    let result;
    setTimeout(() => {
        result = name;
        console.log("I have done...");
    }, 3000);
    return result;
}
let output = sayName("Sajjatul Islam");
console.log(output);