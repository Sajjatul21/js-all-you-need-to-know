function Shape() {
    this.draw = function () {
        console.log(this);
    };
}

let s1 = new Shape()
s1.draw()