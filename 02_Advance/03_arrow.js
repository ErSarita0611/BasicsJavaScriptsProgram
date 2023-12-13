const user = {
    username: "sarita",
    price: 999

    // welcomeMassage: function(){
    //     console.log(`${this.username} , welcome to website`);
    // }
    
}
// user.welcomeMassage()


// function chai(){
//     let username = "sarita"
//     console.log(this);

// }
// chai()

const chai = function(){
    let username = "sarita"
    console.log(this.username);
}
chai()

const chai1 = () => {
    let username = "sarita"
    console.log(this);
}
chai1()

// Arrow Function


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

// Implicit Arrow

const addTwos = (num1, num2) =>  ( num1 + num2 )
console.log(addTwos(3, 4));


const addTwo2 = (num1, num2) =>  ( {username: "sarita"} )
console.log(addTwo2(3, 4));

// const muArray = [2, 5, 6, 8]
// muArray.forEach()