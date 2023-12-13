

const userEmail = "s@sarita.ai"

if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
}


// Falsy value
// false , 0, -0, bigint 0n, "", null, undefined, NAN


// Truthy Value
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}


// Nulish Coalescing Operator (??): null undefined

let val1
val1 = 5 ?? 10
val1 = null ?? 10 // check sefty 
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);



// Turniary Operator 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less then 80") : console.log("more then 80");


