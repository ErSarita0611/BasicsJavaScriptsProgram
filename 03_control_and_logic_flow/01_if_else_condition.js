//if 


const isUserloggedIn = true

const temperature = 41

if (2 == "2") {
    console.log("executed");
    
}

if (temperature < 50) {
    console.log("less then 50");
    
}else{
    console.log("temperature is greter then 50");

}
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
    
}

// console.log(`user power: ${power}`);

// short hand notetion 


const balance = 1000
// if (balance > 500) console.log("test"){}

if (balance < 500) {
    console.log("less then 500");
    
}else if (balance < 750) {
    console.log("less then 750");
    
} else if (balance < 900) {
    console.log("less then 900");
    
} else {
    console.log("less then 1200");
    
} 


const userloggedIn = true
const debitcard = true
const loggedInFromEmail = true
const loggedInFromGoogle = true

if (userloggedIn && debitcard && 2==2) {
    console.log("Allow to buy course");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
    
}
