const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programing = ["js", "rb", "py", "cpp"]

for (const key in programing) {
    console.log(programing[key]);
    
}


// const map = new Map()
// map.set('IN',"Inaia")
// map.set('USA',"United State of America")
// map.set('FR',"France")

// for (const key in map) {
   
// }
// console.log(key);