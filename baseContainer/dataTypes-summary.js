//primitive and non primitive
/*primitive:  7 catagories
String, Number, Boolean, null, undefined,symbol(make value unique) 
BigInt
*/
//in javascript we not define the language (is it statically type or dynamically type)

const score =100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID);

//const bigNumber = 3434353535353n //represent n at the end for bigint


//non primitive Reference type---------
/*
Array, Objects(object web events), functions

 */
//Array, Objects, Functions (all non primitve data type is  object function)

const heros = ["shaktiman","nagraj", "doga"]
let myObj = {
    name: "Priya",
    age:  25,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)