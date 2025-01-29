function testMe() {
        console.log(this);// this refer window object
}

testMe();


let obj = {
        name: "Shihab",
        print: ()=> {
                console.log(this);
        }
};
obj.print();