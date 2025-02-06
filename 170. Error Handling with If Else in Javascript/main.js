/* 
// let n = Number.parseInt(42.89);
// let n = Number.parseInt("42");
// let n = Number.parseInt([]);
// let n = Number.parseInt({});
let n = Number.parseInt('fdfads');
console.log(n); */

function changeToInt(v) {
    let result = Number.parseInt(v);
    /* if(result == NaN){ // its not working because NaN == NaN => false
        return "Please Provide a value which is able to convert in sInteger"
    } */

    if (!result) {
        return "Please Provide a value which is able to convert in sInteger";
    }
    return result;
}

// let result = changeToInt(54.42);
// let result = changeToInt("54");
let result = changeToInt('yowoq');
console.log(result);