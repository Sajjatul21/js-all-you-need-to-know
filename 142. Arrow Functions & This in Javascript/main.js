function testMe() {
        console.log(this);// this refer window object
}

testMe();


let obj = {
        name: "Shihab",
        print: function () {
                console.log(this);// this refer obj object
        }
};
obj.print();