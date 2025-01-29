function testMe() {
        console.log(this);// this refer window object
}

// testMe();


let obj = {
        name: "Shihab",
        print: function () {
                // console.log(this);
                let self = this;
                setTimeout(function () {
                        console.log(self);
                        console.log(`Hello ${self.name}`);
                }, 1000);
        }
};
obj.print();