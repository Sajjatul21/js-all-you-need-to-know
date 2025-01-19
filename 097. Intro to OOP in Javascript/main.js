// procedural

var width = 10;
var height = 20;

function calculateAreal(width, height) {
    return width * height;
}

function calculateRange(width, height) {
    return 2 * (width + height);
}

var area = calculateAreal(width, height);
var range = calculateRange(width, height);


//Object Oriented

var rect = {
    width: 10,
    height: 20,

    calculateAreal: function () {
        return this.width * this.height;
    },

    calculateRange: function () {
        return 2 * (this.width + this.height);
    }
};

var area2 = rect.calculateAreal();
var range2 = rect.calculateRange();