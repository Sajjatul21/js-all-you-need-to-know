class MathUtility {
    // static method
    static square(x) {
        return x * x;

    }
    // Regular method
    cube(x) {
        return x * x * x;
    }
}
console.log(MathUtility.square(2));

const obj = new MathUtility();
console.log(obj.cube(3));