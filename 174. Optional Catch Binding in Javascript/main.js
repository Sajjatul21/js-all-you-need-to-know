try {
    console.log("I am line 1");
    throw new Error("I am error");
    console.log("I am line 2");
    console.log("I am line 3");
}
catch (e) { // optional cash binding
    console.log(e.message);
}
finally {
    console.log("I am finally block");
}