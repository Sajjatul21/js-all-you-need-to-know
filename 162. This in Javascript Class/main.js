
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(this.name, this.email);
    }
    test() {
        console.log(this);
    }
    static create() {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str = '{"name" : "Shihab", "email": "shihab@example.com"}';
let p1 = Person.create(str);
// p1.print();
p1.test();
let anotherTest = p1.test;
anotherTest();