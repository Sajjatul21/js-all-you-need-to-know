// Procedural

var width = 10;
var height = 20;

function calculateArea(width, height) {
    return width * height;
}

function calculateRange(width, height) {
    return 2 * (width, height);
}

var area = calculateArea(width, height);
var range = calculateRange(width, height);

// Object Oriented 

var rect = {
    width: 10,
    height: 20,
    calculateArea: function () {
        return this.width * this.height;
    },

    calculateRange: function () {
        return 2 * (this.width + this.height);
    }
};

var area1 = rect.calculateArea();
var range1 = rect.calculateRange();