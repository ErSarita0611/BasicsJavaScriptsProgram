

const myNumbers = [1, 2, 3]

const myTotal = myNumbers.reduce(function (acc, currentvalue){
    console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    return acc + currentvalue
}, 0)

console.log(myTotal);


// Arrow function


const myTotal1 = myNumbers.reduce( (acc, curr) => acc+curr, 0 )

console.log(myTotal1);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    {
        itemName: "DPython Course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);