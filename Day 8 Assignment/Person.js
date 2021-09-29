class Person {
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getName(){
        return "Hello "+this.name;
    }
}

const person1 = new Person("John",28,"India");

console.log(person1.getName());

