class CustomError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}

try {
    console.log("I am line 1");
    // throw new Error("I am error");
    throw new CustomError("I am your Error")
    console.log("I am line 2");
    console.log("I am line 3");
}
catch (e){
    console.log(e);
    console.dir(e);
    console.log(e.message)
    // console.log("This is custom Error Message");
}
/* finally {
    console.log("I am finally block");
} */