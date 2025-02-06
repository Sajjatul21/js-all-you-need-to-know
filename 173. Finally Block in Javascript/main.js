try {
    console.log("I am line 1");
    console.log("I am line 2");
    console.log("I am line 3");
}
catch (e) {
    console.log(e.message);
}
finally{
    console.log("I am finally block")
}