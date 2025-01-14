// function declaration 

abc();
function abc() {
    console.log('I am Function');
}

// function expression 

// newAbc() // we don`t call newAbc() because in creation phase it store undefine. execution phase don`t call  undefine
var newAbc = function () {
    console.log("I am new Function");
};

newAbc()