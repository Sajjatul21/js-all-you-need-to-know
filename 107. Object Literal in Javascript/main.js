var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        // console.log("My width is " + width)
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);

    }
};

// rect.width
// rect.height

rect.draw();

rect.width = 200;
rect.height = 300;
rect.draw();