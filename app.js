//Object literal
// const person = {
//     name: 'John'
// };

// console.log(person.name);

//person constructor must uppercase the first letter
// function Person(name){
//     this.name = 'John';
// }

// const john = new Person();

// console.log(john.name);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this);
// }

// alert();

// const john = new Person('John', 36);

// console.log(john.name);

//constructor and this keyword
//person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const bob = new Person('Bob', '5-13-1983');
// const bob = new Person('Bob', 'May-13-1983');
const bob = new Person('Bob', 'May/13/1983');
// const jay = new Person('Jay', 21);

// console.log(jay);
console.log(bob.calculateAge());