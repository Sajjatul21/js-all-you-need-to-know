
// naming convention should be camelCase on constructor pattern
var Rectangle = function(width, height){
    this.width= width
    this.height =height

    this.draw= function () {
        console.log('I am a rectangle');
        this.printProperties();
        console.log(this);

    }
    this.printProperties= function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    }
}
/* In the constructor pattern, `new` must be used because `new` returns an object;
 otherwise, `this` will be associated with the `window` object and show an error. */
var rect = new Rectangle(10,20)
rect.draw()
