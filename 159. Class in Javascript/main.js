/* function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.draw=function () {
    console.log(this)
    console.log('drawing...')
}
let rect = new Rectangle(12,15) */


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log(this);
        console.log("Drawing");
    }
}

let rect = new Rectangle(12, 15);
console.log(rect);
console.log(rect.draw());
console.log(typeof Rectangle);