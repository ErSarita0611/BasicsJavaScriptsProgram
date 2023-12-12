let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString);
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateData = new Date(2023, 0, 23)
console.log(myCreateData.toDateString());


let myCreateDatas = new Date(2023, 0, 23, 5, 3 )
console.log(myCreateDatas.toDateString());


let newDates = new Date("2023-01-14")
console.log(newDates.toDateString());


let myNewCreatesDate = new Date("01-14-2023")
console.log(myNewCreatesDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateData.getDate());
console.log(myCreateDatas.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday:"long",
    
})



