//ES6
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;

    }
    calculateAge() {
        const diff = Date.now() = this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newlastName){
        this.lastName = newlastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'William', '11-13-1983');

mary.getsMarried('Thomson');

console.log(mary);
console.log(Person.addNumbers(1,2));