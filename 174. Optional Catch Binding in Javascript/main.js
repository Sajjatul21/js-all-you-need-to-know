try {
    console.log("I am line 1");
    throw new Error("I am error");
    console.log("I am line 2");
    console.log("I am line 3");
}
catch {
    // console.log(e.message);
    console.log("This is custom Error Message");
}
finally {
    console.log("I am finally block");
}