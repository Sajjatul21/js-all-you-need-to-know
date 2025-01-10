function something(greet, name) {
    function sayHi() {
        console.log(greet, name);
    }
    sayHi();
}

something('Good Morning', "Shihab");

function message(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0];
        }
        else {
            return '';
        }
    }
    var message = greet + " " + getFirstName();
    console.log(message);
}

message("Good Morning", "Sajjatul Islam");
message("Good Morning");