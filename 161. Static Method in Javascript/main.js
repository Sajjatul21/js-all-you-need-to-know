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

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Static Method(Factory Method)
    static CreateAdmin() {
        return new User("Sajjatul", 22);
    }
}
/* const user1 = new User("Sajjatul", 22);
console.log(user1); */

const admin = User.CreateAdmin();
console.log(admin);