function testMe() {
        console.log(this);// this refer window object
}

// testMe();


let obj = {
        name: "Shihab",
        print: function () {
                console.log(this)
                setTimeout(function () {
                        console.log(this)
                        console.log(`Hello ${this.name}`);
                }, 1000);
        }
};
obj.print();