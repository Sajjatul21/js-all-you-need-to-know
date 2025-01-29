function testMe() {
        console.log(this);// this refer window object
}

// testMe();


let obj = {
        name: "Shihab",
        print: function () {
                setTimeout(() => {
                        console.log(this);
                        console.log(`Hello ${this.name}`);
                }, 1000);
        }
};
obj.print();