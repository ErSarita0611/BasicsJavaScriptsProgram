// Arrays


const myArr = [0, 1, 2, 3, 4]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods


myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(newArr);
console.log(myArr);


// Slice, Splice

console.log("A ",myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["supperman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


const all_new_heros = [... marvel_heros, ... dc_heros]
console.log(all_new_heros);


const another_Array = [1, 2, 3, [4, 5, 6], 7 [6, 7, [4, 5]]]

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("sarita")); 
console.log(Array.from("sarita"));
console.log(Array.from({name: "sarita"}));  // intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

