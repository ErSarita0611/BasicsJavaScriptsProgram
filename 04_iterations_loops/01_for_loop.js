
// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        console.log(" 5 is the best number");
        
    }
    console.log(element);
    
}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop values: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop values: ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
        
        
    }
 
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
        
    }
    console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}