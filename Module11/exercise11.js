class Car{
    start(){
console.log("starting")
    }
     stop(){
     console.log("stopiing")
     }
}

let a = new Car();
console.log(a.start());



class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}
const student1 = new Student("Alice", 20, "S12345");
student1.greet(); 