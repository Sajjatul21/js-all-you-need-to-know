function testMe() {
        console.log(this);// this refer window object
}

// testMe();


let obj = {
        name: "Shihab",
        print: function () {
                setTimeout(function () {
                        console.log(self);
                        console.log(`Hello ${this.name}`);
                }.bind(this), 1000);
        }
};
obj.print();