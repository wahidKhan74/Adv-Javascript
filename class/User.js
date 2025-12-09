class User {

    #name;
    constructor(name, email) {
        this.#name = name;
        this.email = email;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const user1 = new User("John Doe", "john@gmail.com");
console.log(user1);
console.log(user1.name); // undefined
// console.log(user1.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

console.log(user1.getName()); // John Doe
user1.setName("Jane Doe");
console.log(user1.getName()); // Jane Doe
