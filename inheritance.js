//Prototype Inheritance
//Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
    //Greeting
    Person.prototype.greeting = function() {
        return `Hello There ${this.firstName} ${this.lastName}`; 
    }

    const person1 = new Person('John', 'Doe');

    console.log(person1.greeting());

    // Customer constructor
    function Customer(firstName, lastName, phone, membership) {
        Person.call(this, firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

//inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('John', 'Doe', '555-555-555', 'Standard');

console.log(customer1);

//Customer Greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;

}

console.log(customer1.greeting());