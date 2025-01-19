
var rect = {
    width: 10,     // properties
    height: 20,    // properties

    calculateAreal: function () {       // methods
        return this.width * this.height;
    },

    calculateRange: function () {      // methods
        return 2 * (this.width + this.height);
    }
};

var area2 = rect.calculateAreal();
var range2 = rect.calculateRange();