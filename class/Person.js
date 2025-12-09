class Person {

    // declare the object properties
    name;
    age;
    gender;

    // intialize the object properties
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }

    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
    }

}

let personObj1 = new Person("Alice", 30, "Female");
let personObj2 = new Person("David", 31, "male");

console.log(personObj1.getDetails());
console.log(personObj1.celebrateBirthday());
console.log("---------------");
console.log(personObj2.getDetails());
console.log(personObj2.celebrateBirthday());
console.log("---------------")
console.log(personObj1);
console.log(personObj2);
