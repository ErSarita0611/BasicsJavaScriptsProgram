const codding = ["js", "ruby", "python", "cpp", "java"]

codding.forEach( function (item) {
    console.log(item);
} )

codding.forEach( (value) => {
    console.log(value);
} )


function printMe(item){
    console.log(item);
}

codding.forEach(printMe)

codding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);

} )


const mycodding = [

    {
        languageName : "javaScript",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "php"
    },
    {
        languageName: "ruby",
        languageFileName: "js"
    },
]

mycodding.forEach( (item)=>{
    console.log(item.languageFileName);
} )