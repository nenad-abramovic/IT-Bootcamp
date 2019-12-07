let person1 = {
    name: 'Марко',
    surname: 'Марковић',
    age: 28
};
console.log(person1);

let person2 = {
    name: 'Милош',
    surname: 'Милошевић',
    age: 29
};

class Person {
    name;
    surname;
    age;
    constructor(name, surname, age = 0) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    speak(text) {
        return `${this.name} ${this.surname}: ${text}`;
    }
    changeName(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

let person3 = new Person('Милка', 'Цанић');

console.log(person3.name);
let person4 = new Person('Жељко', 'Жељковић');
console.log(person4.speak('Добро вече!'));
console.log(person3.speak('Добро вече и добродошли!'));
person4.changeName('Јован', 'Дучић');
console.log(person4)

// 

class Дог {
    static type = 'Dog';
    constructor(name, breed, owner, age) {
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.age = age;
    }
    barks() {
        return `[${this.breed}]${this.name}: Woof!`;
    }
    static getType() {
        return `The type is ${this.type}`;
    }
}

let dog1 = new Дог('Џеки', 'Авлијанер', person3, 3);
console.log(dog1);
console.log(dog1.barks());
console.log(Дог.getType());
console.log(dog1.owner.speak('Држ га!'));

let psi = [new Дог('Марко', 'Доџ', person4, 3), new Дог('Рекс', 'Доџ', person3, 3), new Дог('Декс', 'Доџ', person4, 3)];
psi.forEach(element => {
    console.log(element.barks());
});

class Matemathics{
    static PI = 3.14159;
    static add(a, b) {
        return a + b; 
    }
    static mult(a, b) {
        return a * b;
    }
    static div(a, b) {
        try {
            if(b == 0) throw 'Deljenje nulom!';
            return a / b;
        } catch(e) {
            console.log(e);
        }
    }
}

console.log(Matemathics.PI);
console.log(Matemathics.add(5, 3));
console.log(Matemathics.mult('5', 3));
console.log(Matemathics.div(4, 0));


class Poodle extends Дог {
    static type = 'Poodle';
    
    constructor(name, age, owner, size) {
        super(name, 'Poodle', owner, age);
        this.size = size;
    }
    barks() {
        return `Silently [${this.size}]${super.barks()}`;
    }
}

let dog2 = new Poodle('Рекс', 1, person2, 'Very Small');
console.log(dog2);
console.log(dog2.barks());

psi.push(dog2);
psi.forEach(element => {
    console.log(element.barks());
});