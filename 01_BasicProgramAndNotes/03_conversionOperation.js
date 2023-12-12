let score = "33abs";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "22"=>22
// "22abds"=> NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "sarita" => true;


let someNumber = 55;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));



//****************************************************** Operations *****************************************************/


let value = 5
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);


let str1 = "hello"
let str2 = "sarita"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 


let gameCounter = 100
gameCounter++;
console.log(gameCounter);