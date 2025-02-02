
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.another = function(){
            
        }
    }
    name = "Shihab"
    test = function(){

    }
    draw() {
        console.log(this);
        console.log("Drawing");
    }
}

let rect = new Rectangle(12, 15);
console.log(rect);
