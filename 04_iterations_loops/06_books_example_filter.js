const codding = ["js", "ruby", "python", "cpp", "java"]

const value = codding.forEach( (item) => {
    console.log(item);
    
});
console.log(value);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (num) => {
    num > 4
} )
console.log(newNum);

const newNums = []
myNum.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
} )

console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
     edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
     edition: 2005},
    {title: 'Book Tree', genre: 'History', publish: 1999,
     edition: 2006},
    {title: 'Book Four', genre: 'Maths', publish: 2009,
     edition: 2007},
    {title: 'Book five', genre: 'Biology', publish: 2008, 
    edition: 2009},
    {title: 'Book six', genre: 'Science', publish: 2011,
     edition: 2010},
    {title: 'Book seven', genre: 'Chemistry', publish: 2012,
     edition: 2016},
    {title: 'Book eight', genre: 'Non-History', publish: 2014,
     edition: 2018},
    {title: 'Book nine', genre: 'Mathematics', publish: 2016,
     edition: 2019},
    {title: 'Book ten', genre: 'Geography', publish: 2018,
     edition: 2020},
    {title: 'Book eleventh', genre: 'Economics', publish: 2000,
     edition: 2022}
];

const usebooks =  books.filter( (bk) => bk.genre === 'History' )

const userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History"} )

console.log(userBooks);