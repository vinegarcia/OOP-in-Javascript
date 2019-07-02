//using object create
//object literalif having =
const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newlastName){
        this.lastName = newlastName;
    }
};

const mary = Object.create(personPrototype);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());

const bob = Object.create(personPrototype,{
    firstName: { value: 'Bobby'},
    lastName: {value: 'Ferrer'},
    age: {value: 36}
});

console.log(bob);
console.log(bob.greeting());
