
// Foe Of Loop
// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}


// Maps


const map = new Map()
map.set('IN',"Inaia")
map.set('USA',"United State of America")
map.set('FR',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spidarman'
}
