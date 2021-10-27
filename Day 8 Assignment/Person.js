class Person {
    //constructor to initialise the Person details.
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }  
  
    getName(){
        return "Hello "+this.name;    //function to return name of the Person (points to the current object)
    }
}

const person1 = new Person("John",28,"India");

console.log(person1.getName());

