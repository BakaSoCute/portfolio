class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(this.name)
    }
}
const sasha = new Person ('sasha', 28)
sasha.sayHi()

