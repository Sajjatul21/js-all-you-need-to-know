function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve("I have got an iPhone");
            }
            else {
                reject(new Error("You got Failed"));
            }
        }, 2000);
    });
}
/* console.log(getIphone(true));
console.log(getIphone(false)); */

getIphone(false)
    // getIphone(true)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
        console.log(e.message);
    });
