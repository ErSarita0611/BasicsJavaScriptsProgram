let a = 300

if (true) {
    let a = 20
    const b = 30
    console.log("INNER: ", a);
    
}

console.log(a);


// nested scopes

function one(){
    const username = "sarita"

    function two(){
        const website = "youtub"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "sarita"
    if (username === "sarita") {
        const website = " youtub"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


//+++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++


function addone (num){
    return num + 1
}

console.log(addone(5));

const addTwo = function(num){
    return num + 2
}

addTwo(5)