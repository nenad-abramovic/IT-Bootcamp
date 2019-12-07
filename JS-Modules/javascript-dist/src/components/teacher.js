class Teacher{
    constructor(
        firstName,
        lastName,
        age,
        gender,
        yearsOfTeaching
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.yearsOfTeaching = yearsOfTeaching;
        console.log(`init teacher - ${this.firstName}`);
    }
    getTeacher() {
        return `<li>${this.firstName} ${this.lastName}</li>`;
    }
}

export default Teacher;