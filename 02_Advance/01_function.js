function saymyname(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");
    
    }
    // saymyname()
    
    function addTwoNumbers(number1, number2){
      console.log(number1 + number2);
    }
    
    function addTwoNumbers2(number1, number2){
    
        let result = number1 + number2
        return result
        console.log(number1 + number2);
      }
    
    const result = addTwoNumbers2(3, 5)
    console.log("Result", result);
    
    
    function loginUserMassage(username = "sari"){
        if (!username){ 
        console.log("Please Enter a Username");
        return 
            
        }
        return `${username} just logged in`
    
    }
     
    // console.log(loginUserMassage("sarita"));
    console.log(loginUserMassage("saru"));


    function calculateCartPrice (val1, val2, ...num1){    //... rest operator and sperate operator
        return num1
    }
     console.log(calculateCartPrice(200, 400, 600));

     const user = {
        username: "sarita",
        price: 155
     }

     function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     }

     handleObject(user)

     handleObject({
        username: "saru",
        price: 522
     })


     const mynewArray = [200, 400, 500, 600]
     function returnSecondValue(getArray){
        return getArray[1]
     }

     console.log(returnSecondValue(mynewArray));
     console.log(returnSecondValue([200, 500, 400, 600]));
    
    
    
    