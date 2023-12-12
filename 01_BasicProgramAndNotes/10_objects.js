
// object.create


// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "sarita",
    "full name": "sarita kuamri",
    [mySym]: "mykey1",
    age: 21,
    location: "noida",
    email: "sarita@google.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "sarita@chatgtp.com"
// Object.freeze(jsuser) // not change values
jsuser.email = "sarita@microsoft.com"
console.log(jsuser);


jsuser.greeting = function(){
    console.log("Hello Js user");
}

jsuser.greetingtwo = function(){
    console.log("Hello Js user, ${this.name}");
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


// singleton, constructor
const tinderUser = new Object() // singleton
const tinderUser2 = {} // non singleton

tinderUser.id = "123456abc"
tinderUser.name = "sari"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "saru@gmail.com",
    fullname:{
        userfullname: {
            firstname: "saru",
            lastname: "kumari"

        }
       
    }
}

console.log(regularUser.fullname.userfullname.firstname);

console.log(regularUser.fullname);


const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "c"}
const object3 = {3: "a", 4: "c"}

const object4 = Object.assign({}, object1, object2)
console.log(object4);

const object5 = {...object1, ...object2, ...object3}
console.log(object5);



const users = {
    id: 1,
    email: "h@gmail.com"
}

// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// de Structure

const course = {
    coursename: "js in hindi",
    price: "888",
    courseinstructor: "sarita"

}

const {courseinstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);
