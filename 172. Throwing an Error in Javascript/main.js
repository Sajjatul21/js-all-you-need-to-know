try {
    console.log("I am line 1");
    console.log("I am line 2");
    throw new Error("I am error");
    console.log("I am line 3");
    console.log("I am line 4");
}
catch (e) {
    console.log(e.message);
}