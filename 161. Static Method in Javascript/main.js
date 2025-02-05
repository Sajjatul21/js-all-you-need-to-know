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

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(this.name, this.email);
    }
    static create() {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str = '{"name" : "Shihab", "email": "shihab@example.com"}';
let p1 = Person.create(str);
console.log(p1);

console.log(p1 instanceof Person);
p1.print();