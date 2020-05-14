class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi!'+ this.name + '!';
        // Using BackTick key For Templating
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
       let description = super.getDescription();
       if(this.major) {
        description += ` Their major is ${this.major}`;
       }
       return description;
    }
}

// const me = new Person("Yves Mugenga", 22);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

const me = new Student("Yves Mugenga", 22, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other);

// Challenge

class Traveller extends Person{
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting() {
        let text = super.getGreeting();
        if(this.hasLocation) {
            text += ` , I am visiting from ${this.location};`
        }
        return text;
    }
}

const travel = new Traveller("Aline", 21, "Kigali");
console.log(travel.getGreeting());