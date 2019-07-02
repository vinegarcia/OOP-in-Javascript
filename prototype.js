//Prototype explained
//Object.prototype
//Person. Prototype



//Person Constructor


function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
}
//calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthDay.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

//Get full name
Person.prototype.getFullname = function(newLastName){
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getsMaried = function(newLastName){
    // return `${this.firstName} ${this.lastName}`;
   this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '9-30-83');
const mary = new Person('Mary', 'Johnson', 'March 20 1990');

console.log(john.calculateAge());

mary.getsMaried('Ferrer');


console.log(mary.getFullname());

console.log(mary);
// console.log(mary.hasOwnProperty('getFullName'));