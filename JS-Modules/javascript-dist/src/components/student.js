export default class Student {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        yearOfStudy
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.yearOfStudy = yearOfStudy;
        console.log(`init student - ${this.firstName}`);
    }
    getStudent(){
        return `<li>${this.firstName} ${this.lastName}</li>`;
    }
}