function Shape() {
    this.draw = function () {
        console.log(this);
    };
}

let s1 = new Shape();
var anotherDraw = s1.draw;
anotherDraw();