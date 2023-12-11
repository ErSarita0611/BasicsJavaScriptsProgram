const name = "sarita"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello My Name is ${name} and my repo count  is ${repoCount}`);

const gameName = new String('sarita')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringone = " sarita  " 
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://curly-carnival-r44pp4v54xv9hx5wq.github.dev/"
console.log(url.replace('%20', '-'));
console.log(url.includes('sunder'));

console.log(gameName.split('-'));

