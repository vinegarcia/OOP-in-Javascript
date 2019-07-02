//build in constructor
//prototype means function in  es5
//string
 const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('Yes');
} else {
    console.log('No');
}

//Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);

const bool1 = true;
const bool2 = new Boolean(true);


//function
const getSum1= function(x, Yes){
    return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1+1');

//object
const john1 = {name: 'John'}
const john2 = new Object({name: 'John'})
console.log(john2);

//Array
const arr1 = [1,2,33,44];
const arr2 = new Array(1,2,33,44);

console.log (arr2);
 

