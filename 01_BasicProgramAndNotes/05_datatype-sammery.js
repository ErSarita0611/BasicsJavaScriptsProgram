// Primitive 

// 7 Types : String , Number , Boolean , Null, Undefined, Symbol, Bigint 

const score = 100
const scoreValue = false

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 65562326595666444n


// REference (Non Primitive Datatype)

// Array, Objects, Functions



const heros = ["shaktiman","naagraj","dogo"]
let myobj = {
    name : "sarita",
    age : 22,

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);





//************************************************************************************************************* */

// Stack (Primitive data type)-> memory 

// Heap (Non-Primitive datatype)-> reference


let myInstagramName = "I love_namture"
let anotherName = myInstagramName
anotherName = "Heven is not for the perfact but for the loving"

console.log(anotherName);
console.log(myInstagramName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sarita@google.com"

console.log(userOne.email);
console.log(userTwo.email);




